import { motion } from "framer-motion";
import { ArrowUpRight, Sprout, Wrench, Bot } from "lucide-react";

const projects = [
  {
    badge: "PRODUCTO PROPIO",
    title: "AUREON Agro",
    description:
      "Plataforma inteligente para agricultura de precisión mediante IoT, sensores y análisis de datos.",
    icon: Sprout,
    category: "AgTech",
  },
  {
    badge: "SAAS EMPRESARIAL",
    title: "AUREON Taller",
    description:
      "Sistema SaaS para la gestión integral de talleres con clientes, órdenes de trabajo e inventario.",
    icon: Wrench,
    category: "SaaS Empresarial",
  },
  {
    badge: "INTELIGENCIA ARTIFICIAL",
    title: "Automatización Inteligente",
    description:
      "Implementación de inteligencia artificial y automatización para optimizar procesos empresariales.",
    icon: Bot,
    category: "Inteligencia Artificial",
  },
];

function Portfolio() {
  return (
    <section id="portafolio" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Proyectos que transforman negocios
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Creamos plataformas digitales, sistemas inteligentes y soluciones
            tecnológicas orientadas a mejorar procesos reales de empresas y
            organizaciones.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-lg
                  shadow-slate-200/50"
              >
                <div
                    className="
                      mb-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-500/10
                      text-blue-600"
                >
                  <Icon size={35} />
                </div>

                <span
                    className="
                      mb-3
                      inline-block
                      rounded-full
                      bg-slate-900
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      text-white"
                >
    {project.badge}
</span>

                <p className="mt-6 text-sm font-medium text-blue-600">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600">{project.description}</p>

                <button
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-slate-900
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-blue-600"
                >
                  Conocer proyecto

                  <ArrowUpRight
                      size={18}
                      className="
                        transition-transform
                        group-hover:translate-x-1
                        group-hover:-translate-y-1"
                  />

                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
