import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Dashboard from "@/components/common/Dashboard";

function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-20"
    >
      {/* Fondo decorativo */}
      {/* Fondo tecnológico */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />

        {/* Luz azul */}
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        {/* Luz cian */}
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Cuadrícula tecnológica */}
        <div
          className="
        absolute inset-0
        bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
        bg-[size:40px_40px]
        "
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:gap-20">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div
            className="
    mb-6
    flex
    w-fit
    items-center
    gap-2
    rounded-full
    border
    border-blue-400/20
    bg-blue-500/10
    px-4
    py-2
    text-blue-300
    backdrop-blur
    "
          >
            <Sparkles size={18} />

            <span className="text-sm font-medium">
              IA • SaaS • Automatización
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Impulsamos empresas
            <span className="text-blue-500">
              {" "}
              con Inteligencia Artificial y Software
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Diseñamos soluciones tecnológicas inteligentes para empresas que
            buscan automatizar procesos, mejorar su productividad y crecer
            mediante inteligencia artificial, software y transformación digital.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="
        group
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        text-white
        shadow-lg
        shadow-blue-500/25
        transition-all
        hover:scale-105
        hover:shadow-xl
        "
            >
              Conocer soluciones
              <ArrowRight
                className="
            ml-2
            transition-transform
            group-hover:translate-x-1
            "
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="
        border-white/20
        bg-white/5
        text-white
        backdrop-blur
        hover:bg-white/10
        "
            >
              Contactarnos
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            <div>
              <h3 className="text-3xl font-bold text-white">+50</h3>

              <p className="text-sm text-slate-400">Proyectos</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">99.9%</h3>

              <p className="text-sm text-slate-400">Disponibilidad</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">24/7</h3>

              <p className="text-sm text-slate-400">Soporte</p>
            </div>
          </div>
        </motion.div>

        {/* Panel tecnológico */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <Dashboard />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
