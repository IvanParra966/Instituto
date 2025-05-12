import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineMenuOpen } from "react-icons/md";
const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            className="w-auto h-10"
          />
          <span className="font-audiowide text-xl text-blue-800">
            White Board
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            to="/Cursos"
            className="text-gray-900 hover:text-blue-600 font-medium"
          >
            <span>Cursos</span>
          </Link>
          <Link
            to="/Profesores"
            className="text-gray-900 hover:text-blue-600 font-medium"
          >
            <span>Profesores</span>
          </Link>
          <Link
            to="/Nosotros"
            className="text-gray-900 hover:text-blue-600 font-medium"
          >
            <span>Nosotros</span>
          </Link>
          <Link
            to="/Contacto"
            className="text-gray-900 hover:text-blue-600 font-medium"
          >
            <span>Contacto</span>
          </Link>
        </nav>

        {/* menu mobile */}
        <button
          className="md:hidden text-gray-900 focus-outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <MdOutlineMenuOpen size={24} />
          ) : (
            <GiHamburgerMenu size={24} />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2 shadow-inner">
          <div className="flex flex-col space-y-4 pb-4">
            <Link
              to="/Nosotros"
              className="text-gray-900 hover:text-blue-600 font-medium py-2"
            >
              <span>Cursos</span>
            </Link>
            <Link
              to="/Nosotros"
              className="text-gray-900 hover:text-blue-600 font-medium py-2"
            >
              <span>Profesores</span>
            </Link>
            <Link
              to="/Nosotros"
              className="text-gray-900 hover:text-blue-600 font-medium py-2"
            >
              <span>Nosotros</span>
            </Link>
            <Link
              to="/Nosotros"
              className="text-gray-900 hover:text-blue-600 font-medium py-2"
            >
              <span>Contacto</span>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
