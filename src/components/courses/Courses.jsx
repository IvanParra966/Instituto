import { FaBookOpen,FaUserGroup,FaArrowRightLong ,FaRegClock    } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Courses = () => {

  const courses = [
    {
      id: "beginner-a1",
      title: "Inglés Inicial (Beginner A1)",
      level: "A1",
      image: "/src/assets/img/course1.png",
      shortDescription: "Frases básicas, saludos, presentación personal y vocabulario cotidiano.",
      fullDescription: "Este curso está diseñado para personas que no tienen ningún conocimiento previo del inglés...",
      objectives: [
        "Comprender y usar expresiones cotidianas de uso frecuente.",
        "Presentarse y responder preguntas básicas.",
        "Mantener una conversación simple si el interlocutor habla despacio."
      ],
      duration: "8 semanas",
      modality: "Online / Presencial",
      price: "Gratis (modalidad online)"
    },
    {
      id: "elementary-a2",
      title: "Inglés Pre-Intermedio (A2 - Elementary)",
      level: "A2",
      image: "/src/assets/img/course2.png",
      shortDescription: "Vocabulario extendido, gramática básica y conversaciones simples.",
      fullDescription: "Ideal para quienes ya tienen una base...",
      objectives: [
        "Formar oraciones en presente, pasado y futuro simple.",
        "Realizar descripciones personales y de objetos.",
        "Participar en diálogos simples sobre temas comunes."
      ],
      duration: "10 semanas",
      modality: "Online / Presencial",
      price: "$10.000 ARS"
    },
    {
      id: "intermediate-b1",
      title: "Inglés Intermedio (B1 - Intermediate)",
      level: "B1",
      image: "/src/assets/img/course3.png",
      shortDescription: "Mayor fluidez, tiempos verbales complejos y redacción básica.",
      fullDescription: "Este curso te ayudará a ganar confianza...",
      objectives: [
        "Expresarse con claridad sobre temas familiares y profesionales.",
        "Leer textos y artículos de dificultad media.",
        "Redactar textos simples pero coherentes."
      ],
      duration: "12 semanas",
      modality: "Online en vivo",
      price: "$15.000 ARS"
    },
    {
      id: "advanced-c1",
      title: "Inglés Avanzado (C1 - Advanced)",
      level: "C1",
      image: "/src/assets/img/course4.png",
      shortDescription: "Lectura crítica, redacción formal y dominio del inglés académico.",
      fullDescription: "Pensado para estudiantes con buen dominio del idioma...",
      objectives: [
        "Entender textos largos y exigentes con matices complejos.",
        "Redactar informes y ensayos bien estructurados.",
        "Hablar fluidamente en contextos profesionales y académicos."
      ],
      duration: "14 semanas",
      modality: "Online / Presencial con tutorías personalizadas",
      price: "$20.000 ARS"
    }
  ];




  return (
     <>
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Nuestros Cursos</h1>
          <p className="text-xl">Descubre nuestra amplia oferta formativa diseñada para impulsar tu carrera profesional.</p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {courses.map((curso) => (
              <div key={curso.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-[4/4]">
                  <img src={curso.image} alt={`Imagen del curso ${curso.title}`} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{curso.title}</h3>
                  <p className="text-gray-600 mb-4">{curso.shortDescription}</p>

                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaRegClock className="h-4 w-4 mr-1" />
                      <span>{curso.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaUserGroup className="h-4 w-4 mr-1" />
                      <span>{curso.modality}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaBookOpen className="h-4 w-4 mr-1" />
                      <span>{curso.level}</span>
                    </div>
                  </div>

                  <Link
                    to={`/cursos/${curso.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Ver detalles <FaArrowRightLong  className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;