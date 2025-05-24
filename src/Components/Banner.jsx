
import buttonplay from "../assets/play-button.png"
import PropTypes from "prop-types";
const Banner = () => {
    return (
      <div
        className="w-full h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        {/* Lớp phủ đen mờ */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
  
        {/* Nội dung chính */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-12 space-y-8 md:space-y-0 ">
          {/* Bên trái: Nội dung */}
          <div className="w-full md:w-1/2 space-y-4 flex-start" style={{justifyItems:"start"}}>
            <button className="bg-gradient-to-r from-red-600 to-red-300 text-white text-lg w-[100px] py-2">
              TV Show
            </button>
  
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50">
              Nghe nói em thích tôi
            </h2>
           
            <span className="space-x-1 text-yellow-400 text-xl text-[40px]">★</span>
            <span className="space-x-1 text-yellow-400 text-xl text-[40px]">★</span>
            <span className="space-x-1 text-yellow-400 text-xl text-[40px]">★</span>
            <span className="space-x-1 text-yellow-400 text-xl text-[40px]">★</span>
            <span className="space-x-1 text-yellow-400 text-xl text-[40px]">★</span>
            
            
       
  
            <p className="text-amber-50 text-start ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
  
            <div className="flex space-x-4 items-center ">
              <button className="bg-black text-amber-50 text-sm md:text-base px-4 py-2">
                Chi tiết
              </button>
              <button className="bg-red-500 text-amber-50 text-sm md:text-base px-4 py-2">
                Xem Phim
              </button>
            </div>
          </div>
  
         
          <div className="w-full md:w-1/2 flex justify-center items-center relative cursor-pointer group">
            <div
              className="w-[180px] h-[260px] md:w-[240px] md:h-[390px] bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: "url('/temp-1.jpeg')" }}
            ></div>
            <div className="w-[180px] h-[260px] md:w-[240px] md:h-[390px] absolute  flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img className="w-[50px] h-[50px] relative" src={buttonplay}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  