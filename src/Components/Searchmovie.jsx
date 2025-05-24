import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import { useState } from "react";
const Searchmovie=({title,data})=>{
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
      
    return(
        <>
        <div className="text-white mb-10 p-10 justify-items-start">
      <h2 className="font-bold mb-5">{title}</h2>

   
      <Carousel
  responsive={responsive}
  containerClass="carousel-container"
  itemClass="px-2"
  infinite
  autoPlay={false}
  arrows
  keyBoardControl
  className="flex items-center space-x-4 w-full"
>
  {Array.isArray(data) && data.length > 0 ? (
    data.map((item) => (
      <div
        onClick={() => handlerTrailer(item.id)}
        key={item.id}
        className="moive-box bg-amber-700 w-[200px] h-[300px] relative group overflow-hidden"
      >
        <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
          <div className="w-full h-full absolute top-0 left-0 opacity-10 bg-black"></div>
          <img
            className="object-cover w-full h-full z-20"
            src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
            alt={item.title}
          />
        </div>
      </div>
    ))
  ) : (
    <p className="text-white px-2">Không có phim như tìm kiếm</p>
  )}
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
        </>
    )
}
Searchmovie.propTypes = {
    data:PropTypes.array,
    title:PropTypes.string,
  };


export default Searchmovie;