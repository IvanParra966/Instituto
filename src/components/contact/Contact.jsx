import { FaMapPin,FaPhone,FaRegEnvelope,FaRegClock,FaLocationArrow    } from "react-icons/fa6";

import { useState } from "react"
const Contact = () => {
      const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = "El asunto es obligatorio"
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulación de envío de formulario
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          asunto: "",
          mensaje: "",
        })

        // Resetear el mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }, 1500)
    }
  }
  return (
    <>
    <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contacto</h1>
            <p className="text-xl">Estamos aquí para responder tus preguntas y ayudarte en todo lo que necesites.</p>
          </div>
        </div>
      </div>

        <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Contact Info 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full text-blue-600">
                <FaMapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Dirección</h3>
              <p className="text-gray-600">
                Av. Educación 123
                <br />
                Ciudad Universitaria
                <br />
                28040 Madrid
              </p>
            </div>

            {/* Contact Info 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full text-blue-600">
                <FaPhone  className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Teléfono</h3>
              <p className="text-gray-600">
                +34 912 345 678
                <br />
                +34 912 345 679
              </p>
            </div>

            {/* Contact Info 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full text-blue-600">
                <FaRegEnvelope  className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Email</h3>
              <p className="text-gray-600">
                info@institutoeducativo.com
                <br />
                admisiones@institutoeducativo.com
              </p>
            </div>

            {/* Contact Info 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full text-blue-600">
                <FaRegClock  className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Horario</h3>
              <p className="text-gray-600">
                Lunes a Viernes
                <br />
                9:00 - 20:00
                <br />
                Sábados: 9:00 - 14:00
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Envíanos un mensaje</h2>

        
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.nombre ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu.email@ejemplo.com"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-gray-700 font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Tu número de teléfono"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-gray-700 font-medium mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    placeholder="Asunto de tu mensaje"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.asunto ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.asunto && <p className="text-red-500 text-sm mt-1">{errors.asunto}</p>}
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Escribe tu mensaje aquí..."
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.mensaje ? "border-red-500" : "border-gray-300"
                    }`}
                  ></textarea>
                  {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center w-full md:w-auto disabled:bg-blue-400"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar mensaje <FaLocationArrow className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Nuestra ubicación</h2>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12166.69101518042!2d-3.7271204302246036!3d40.45296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422857ef3be2a9%3A0x1e3b3a7c57d15bbb!2sCiudad%20Universitaria%2C%20Madrid!5e0!3m2!1ses!2ses!4v1715356500000!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación del Instituto Educativo"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ div */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Preguntas frecuentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Respuestas a las dudas más comunes sobre nuestros servicios y programas.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">¿Cómo puedo inscribirme en un curso?</h3>
                <p className="text-gray-600">
                  Puedes inscribirte a través de nuestra página web, rellenando el formulario de contacto o visitando
                  nuestras instalaciones en horario de atención al público. Nuestro equipo de admisiones te guiará
                  durante todo el proceso.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">¿Ofrecen modalidad online?</h3>
                <p className="text-gray-600">
                  Sí, la mayoría de nuestros programas están disponibles en modalidad presencial, semipresencial y
                  online. Puedes elegir la que mejor se adapte a tus necesidades y disponibilidad.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">¿Cuáles son las formas de pago disponibles?</h3>
                <p className="text-gray-600">
                  Ofrecemos diversas opciones de pago: al contado, mediante transferencia bancaria, tarjeta de crédito o
                  financiación sin intereses. Consulta con nuestro departamento de administración para más detalles.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">¿Tienen servicio de bolsa de empleo?</h3>
                <p className="text-gray-600">
                  Sí, contamos con un departamento de orientación profesional y bolsa de empleo que te ayudará en tu
                  inserción laboral. Mantenemos acuerdos con numerosas empresas que confían en nuestros alumnos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
