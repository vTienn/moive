import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import { useState } from "react";

const Movielist = ({ title, data }) => {

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const customStyles = {
    overlay:{
      zIndex:999,
    },

    
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [trailerkey,setTrailerkey]=useState("")
  
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  // tạo hàm khi click hiện trailer
  const handlerTrailer=async(id)=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    }
      const url = `https://api.themoviedb.org/3/movie/${id}/videos`

      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data);
      setTrailerkey(data.results[0].key)
      setIsOpen(true)

      
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  const filteredData = data.filter((item) => {
    const releaseYear = item.release_date?.split("-")[0]; // Lấy năm từ ngày phát hành
    const matchesYear = selectedYear ? releaseYear === selectedYear : true;
    const matchesCountry = selectedCountry ? item.origin_country?.includes(selectedCountry.toUpperCase()) : true;
  
  
    return matchesYear && matchesCountry
  });
  
  
  return (
    <div className="text-white mb-10 p-10 justify-items-start">
      <div className="flex items-center space-x-4 mb-2 w-full h-full">
      <h2 className=" relative top-2 font-bold mb-5">{title}</h2>
      {/* // dropdown */}
      <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="bg-black text-white border border-gray-500 p-2 rounded"
        >

          <option value="">Thể loại</option>
          <option value="hanh-dong">Hành Động</option>
          <option value="hai-huoc">Hài Hước</option>
          <option value="kinh-di">Kinh Dị</option>
          <option value="lang-man">Lãng Mạn</option>
          {/* thêm thể loại khác nếu cần */}
        </select>

        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="bg-black text-white border border-gray-500 p-2 rounded"
        >
          <option value="">Quốc gia</option>
          <option value="vn">Việt Nam</option>
          <option value="us">Mỹ</option>
          <option value="kr">Hàn Quốc</option>
          <option value="cn">Trung Quốc</option>
          {/* thêm quốc gia nếu cần */}
        </select>
  
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="bg-black text-white border border-gray-500 p-2 rounded"
        >
    
          <option value="">Năm phát hành</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
     

   
      <Carousel  responsive={responsive}
        containerClass="carousel-container"
        itemClass="px-2"
        infinite
        autoPlay={false}
        arrows
        keyBoardControl className="flex items-center space-x-4 w-full" >
{filteredData.length > 0 &&
          filteredData.map((item) => (
            <div
             onClick={()=>{handlerTrailer(item.id)}}
              key={item.id}
              className="moive-box bg-amber-700 w-[200px] h-[300px] relative group overflow-hidden "
            >
              <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
                <div className="w-full h-full absolute top-0 left-0 opacity-10 bg-black"></div>
                <img
                  className="object-cover w-full h-full z-20"
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.title}
                />
                {/* <p className="font-bold text-red text-[15px] ml-2 absolute bottom-3 flex justify-items-center uppercase">
                  {item.title}
                </p> */}
              </div>
            </div>
          ))}
      </Carousel>
      
      <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={()=>{setIsOpen(false)}}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <YouTube videoId={trailerkey} opts={opts}  />;
      
      </Modal>
        
     
    </div>
  );
};

Movielist.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default Movielist;
