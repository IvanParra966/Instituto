import { Link } from "react-router-dom";
import BannerImage from "../../assets/img/Banner.jpg";
import { FaArrowRight } from "react-icons/fa6";
const Banner = () => {
  return (
    <div
      className="relative mt-10 py-20 sm:py-24 md:py-28 bg-cover bg-center"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      {/*Filtro*/}
      <div className="absolute inset-0 bg-gray-900 opacity-50 z-0" />

      {/* Contenido centrado */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome <span className="font-audiowide text-blue-600">White Board</span>
          </h1>
          <p className="text-base sm:text-lg text-white mb-2 sm:mb-4">
            El lugar perfecto para aprender Inglés.
          </p>
          <p className="text-base sm:text-lg text-white mb-6 sm:mb-8">
            The perfect place to learn English.
          </p>
          <Link
            to="/Cursos"
            className="bg-blue-500 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300 flex items-center gap-2"
          >
            Explorar cursos <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Banner;