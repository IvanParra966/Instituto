import { FaBookOpen,FaUserGroup,FaAward,FaRegClock    } from "react-icons/fa6";
import Campus from "../../assets/img/campus.jpg";
import Prof1 from "../../assets/img/prof1.jpg";
import Prof2 from "../../assets/img/prof2.jpg";
import Prof3 from "../../assets/img/prof3.jpg";


const Us = () => {
    return (
      <>
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl">
              Conoce nuestra historia, misión, visión y los valores que nos definen como institución educativa de
              referencia.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                Fundado en 1995, el Instituto Educativo nació con la visión de transformar la educación tradicional y
                ofrecer programas formativos adaptados a las necesidades del mercado laboral.
              </p>
              <p className="text-gray-600 mb-4">
                A lo largo de más de 25 años, hemos formado a miles de profesionales que hoy ocupan puestos relevantes
                en empresas nacionales e internacionales. Nuestro compromiso con la excelencia académica y la innovación
                pedagógica nos ha posicionado como una institución de referencia en el sector educativo.
              </p>
              <p className="text-gray-600">
                Actualmente, contamos con un campus moderno equipado con las últimas tecnologías y un equipo docente
                formado por profesionales en activo que aportan su experiencia y conocimiento a nuestros estudiantes.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img src={Campus} alt="Campus del Instituto Educativo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Misión, Visión y Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estos son los pilares que guían nuestra labor educativa día a día.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full text-blue-600">
                <FaUserGroup className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Misión</h3>
              <p className="text-gray-600">
                Formar profesionales competentes y comprometidos con el desarrollo social, a través de una educación
                integral, innovadora y de calidad que responda a las demandas del entorno laboral actual.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full text-blue-600">
                <FaBookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Visión</h3>
              <p className="text-gray-600">
                Ser reconocidos como una institución educativa líder e innovadora, referente en la formación de
                profesionales que contribuyan al desarrollo sostenible de la sociedad y destaquen por su excelencia
                académica y humana.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full text-blue-600">
                <FaAward className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <FaRegClock className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Excelencia académica</span>
                </li>
                <li className="flex items-start">
                  <FaRegClock className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Innovación pedagógica</span>
                </li>
                <li className="flex items-start">
                  <FaRegClock className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Compromiso social</span>
                </li>
                <li className="flex items-start">
                  <FaRegClock className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Ética profesional</span>
                </li>
                <li className="flex items-start">
                  <FaRegClock className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Respeto a la diversidad</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Team div */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestro Equipo Directivo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conoce a las personas que lideran nuestra institución y trabajan día a día para ofrecer la mejor
              experiencia educativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <img src={Prof1} alt="Director General" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800 mt-20">Dr. Antonio Fernández</h3>
                <p className="text-blue-600 mb-4">Director General</p>
                <p className="text-gray-600">
                  Doctor en Ciencias de la Educación con más de 20 años de experiencia en gestión educativa y liderazgo
                  institucional.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <img src={Prof2} alt="Directora Académica" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800 mt-20">Dra. Elena Gómez</h3>
                <p className="text-blue-600 mb-4">Directora Académica</p>
                <p className="text-gray-600">
                  Especialista en innovación educativa y diseño curricular. Lidera el desarrollo de nuestros programas
                  formativos.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <img src={Prof3} alt="Director de Innovación" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800 mt-20">Dr. Carlos Ruiz</h3>
                <p className="text-blue-600 mb-4">Director de Innovación</p>
                <p className="text-gray-600">
                  Experto en tecnología educativa y metodologías disruptivas. Responsable de la transformación digital
                  de nuestra institución.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats div */}
      <div className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">25+</p>
              <p className="text-xl">Años de experiencia</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">10,000+</p>
              <p className="text-xl">Alumnos graduados</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">50+</p>
              <p className="text-xl">Programas formativos</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">95%</p>
              <p className="text-xl">Inserción laboral</p>
            </div>
          </div>
        </div>
      </div>
    </>
    );
    }

    export default Us;