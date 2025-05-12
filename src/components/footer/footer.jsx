import { Link } from "react-router-dom";
import { FaMapLocationDot,FaPhone,FaRegEnvelope,FaFacebook,FaInstagram,FaSquareXTwitter,FaWhatsapp      } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-blue-900 text-white">
      {/* Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Instituto Educativo</h3>
            <p className="text-gray-300 mb-4">
              Instituto Educativo es una institución dedicada a la formación
              integral de estudiantes, ofreciendo programas académicos de alta
              calidad y un ambiente propicio para el aprendizaje.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/nosotros"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/cursos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cursos
                </Link>
              </li>
              <li>
                <Link
                  to="/profesores"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Profesores
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
                <li className="flex items-center">
                    <FaMapLocationDot className="mr-2 h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">
                        Av. Principal 123, Ciudad Educativa
                    </span>
                </li>
                <li className="flex items-center">
                    <FaPhone  className="mr-2 h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">
                        +1 (555) 123-4567
                    </span>
                </li>
                <li className="flex items-start">
                    <FaRegEnvelope  className="mr-2 h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">
                        info@whiteboard.com.ar
                    </span>
                </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <FaSquareXTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Whatsapp">
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
