import { Mail, Globe, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Marca */}

        <div>
          <h2 className="text-2xl font-bold">
            AUREON<span className="text-blue-500">.</span>
          </h2>

          <p className="mt-2 max-w-sm text-sm text-slate-400">
            Tecnología, inteligencia artificial y soluciones SaaS para
            transformar empresas.
          </p>
        </div>

        {/* Links */}

        <div className="flex gap-5">
          <a href="#" className="text-slate-400 transition hover:text-white">
            <Globe size={22} />
          </a>

          <a href="#" className="text-slate-400 transition hover:text-white">
            <MessageCircle size={22} />
          </a>

          <a
            href="#contacto"
            className="text-slate-400 transition hover:text-white"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:text-left">
        <p>
          © {new Date().getFullYear()} AUREON TECNOLOGIA S.A.S. · NIT
          902088965-2. Todos los derechos reservados.
        </p>

        <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          <a href="/privacidad/" className="transition hover:text-white">
            Política de datos
          </a>
          <a href="/terminos/" className="transition hover:text-white">
            Términos del servicio
          </a>
          <a href="/eliminacion-de-datos/" className="transition hover:text-white">
            Eliminación de datos
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
