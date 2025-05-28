import buttonplay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div
      className="w-full h-[600px] sm:h-[700px] md:h-[600px] lg:h-[700px] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      {/* Lớp phủ đen mờ */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />

      {/* Nội dung chính */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-4 sm:px-6 md:px-12 py-6 sm:py-8 space-y-8 md:space-y-0">
        {/* Bên trái: Nội dung */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <button className="bg-gradient-to-r from-red-600 to-red-300 text-white text-sm sm:text-base w-[90px] sm:w-[100px] py-2">
            TV Show
          </button>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-50">
            Nghe nói em thích tôi
          </h2>

          {/* Sao đánh giá */}
          <div className="flex justify-center md:justify-start">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl sm:text-3xl">
                ★
              </span>
            ))}
          </div>

          <p className="text-amber-50 text-sm sm:text-base text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-black text-amber-50 text-sm sm:text-base px-4 py-2 rounded">
              Chi tiết
            </button>
            <button className="bg-red-500 text-amber-50 text-sm sm:text-base px-4 py-2 rounded">
              Xem Phim
            </button>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 flex justify-center items-center relative cursor-pointer group">
          <div
            className="w-[160px] h-[240px] sm:w-[180px] sm:h-[260px] md:w-[240px] md:h-[390px] bg-cover bg-center rounded-lg shadow-lg relative"
            style={{ backgroundImage: "url('/temp-1.jpeg')" }}
          >
               <div className="w-full h-full absolute flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-lg">
            <img className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]" src={buttonplay} />
            </div>
         


          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
