import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full border-b bg-white/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold tracking-wide text-slate-900">
            AUREON
            <span className="text-blue-600">.</span>
          </h1>
        </div>

        {/* Menú escritorio */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#inicio"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Inicio
          </a>

          <a
            href="#nosotros"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Nosotros
          </a>

          <a
            href="#servicios"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Servicios
          </a>

          <a
            href="#portafolio"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Portafolio
          </a>

          <a
            href="#contacto"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Contacto
          </a>

          <Button>Solicitar asesoría</Button>
        </div>

        {/* Botón móvil */}
        <button className="md:hidden">
          <Menu size={28} />
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
