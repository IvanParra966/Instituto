import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu formación con nosotros?</h2>
            <p className="mb-8">
               Inscríbete ahora y da el primer paso hacia tu futuro profesional.
            </p>
            <Link
                to="/register"
                className="bg-white text-blue-800 hover:bg-gray-200 font-semibold py-2 px-4 rounded"
            >
                Regístrate Ahora
            </Link>
        </div>
    </div>
  );
};

export default Start;
