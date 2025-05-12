import { FaBookOpen,FaUserGroup,FaAward,FaRegClock    } from "react-icons/fa6";

const presentation = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full text-blue-600">
              <FaBookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Programas Acreditados</h3>
            <p className="text-gray-600">
                Todos nuestros programas están acreditados por instituciones reconocidas, garantizando la calidad de nuestra educación.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full text-blue-600">
              <FaUserGroup  className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Profesores Expertos</h3>
            <p className="text-gray-600">
                Nuestro equipo de profesores está compuesto por expertos en sus respectivas áreas, brindando una educación de alta calidad.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full text-blue-600">
              <FaAward  className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Excelencia Académica</h3>
            <p className="text-gray-600">
                Nos comprometemos a ofrecer una educación de excelencia, preparando a nuestros estudiantes para enfrentar los desafíos del mundo laboral.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full text-blue-600">
              <FaRegClock  className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Horarios Flexibles</h3>
            <p className="text-gray-600">
                Ofrecemos horarios flexibles para adaptarnos a las necesidades de nuestros estudiantes, permitiendo un equilibrio entre estudio y trabajo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default presentation;
