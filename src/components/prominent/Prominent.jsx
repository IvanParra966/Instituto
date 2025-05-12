import Card1 from "../../assets/img/prominent-card1.jpg";
import Card2 from "../../assets/img/prominent-card2.jpg";
import Card3 from "../../assets/img/prominent-card3.jpg";
import Card4 from "../../assets/img/prominent-card4.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Prominent = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Nuestros Cursos Destacados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros cursos más populares y mejora tus habilidades con
            nosotros.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <img src={Card1} alt="img card" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-600">
                  Ingles Inicial (Beginner A1)
                </h3>
                <p className="text-gray-600 mb-4">
                  Curso para quienes recién comienzan. Se enseñan frases
                  básicas, saludos, presentación personal y vocabulario
                  cotidiano.
                </p>
                <Link
                  href=""
                  className="text-blue-500 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Ver Detalles <FaArrowRightLong className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <img src={Card2} alt="img card" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-600">
                  Inglés Pre-Intermedio (A2 - Elementary)
                </h3>
                <p className="text-gray-600 mb-4">
                  Se amplía el vocabulario y la gramática. Conversaciones
                  simples sobre familia, compras, clima y rutinas.
                </p>
                <Link
                  href=""
                  className="text-blue-500 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Ver Detalles <FaArrowRightLong className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <img src={Card3} alt="img card" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-600">
                  Inglés Intermedio (B1 - Intermediate)
                </h3>
                <p className="text-gray-600 mb-4">
                  Curso para mejorar la fluidez. Incluye tiempos verbales
                  complejos, redacción básica y comprensión de textos más
                  largos.
                </p>
                <Link
                  href=""
                  className="text-blue-500 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Ver Detalles <FaArrowRightLong className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <img src={Card4} alt="img card" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-600">
                  Inglés Avanzado (C1 - Advanced)
                </h3>
                <p className="text-gray-600 mb-4">
                  Perfeccionamiento del idioma. Lectura crítica, redacción
                  formal, presentaciones orales y comprensión total de inglés
                  académico o profesional.
                </p>
                <Link
                  href=""
                  className="text-blue-500 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Ver Detalles <FaArrowRightLong className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/cursos" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center">
              Ver todos los cursos <FaArrowRightLong className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prominent;
