import {motion} from "framer-motion";
import {BrainCircuit, Cloud, Code2, ShieldCheck, Smartphone, Workflow,} from "lucide-react";

const services = [
    {
        category: "SOFTWARE",
        title: "Desarrollo de Software",
        description:
            "Creamos aplicaciones web y plataformas digitales adaptadas a las necesidades de cada organización.",
        icon: Code2,
    },
    {
        category: "IA",
        title: "Inteligencia Artificial",
        description:
            "Implementamos soluciones con IA para automatizar tareas, analizar información y mejorar decisiones.",
        icon: BrainCircuit,
    },
    {
        category: "AUTOMATIZACIÓN",
        title: "Automatización de Procesos",
        description:
            "Optimizamos procesos repetitivos mediante herramientas digitales y flujos inteligentes.",
        icon: Workflow,
    },
    {
        category: "CLOUD",
        title: "Soluciones SaaS",
        description:
            "Diseñamos plataformas escalables en la nube para empresas que buscan crecer digitalmente.",
        icon: Cloud,
    },
    {
        category: "ESTRATEGIA",
        title: "Transformación Digital",
        description:
            "Ayudamos a las empresas a modernizar sus procesos mediante tecnología estratégica.",
        icon: Smartphone,
    },
    {
        category: "CONSULTORÍA",
        title: "Consultoría Tecnológica",
        description:
            "Analizamos necesidades empresariales y proponemos soluciones eficientes y escalables.",
        icon: ShieldCheck,
    },
];

function Services() {
    return (
        <section id="servicios" className="bg-slate-50 px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.7}}
                    viewport={{once: true}}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
                        Soluciones tecnológicas para empresas inteligentes
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                        Diseñamos software, inteligencia artificial y soluciones digitales
                        que ayudan a las empresas a automatizar procesos, mejorar su
                        productividad y crecer con tecnología.
                    </p>
                </motion.div>

                <div className="mt-14 grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

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
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                }}
                                className="
                                  rounded-3xl
                                  border
                                  border-slate-200
                                  bg-white
                                  p-8
                                  shadow-lg
                                  shadow-slate-200/50
                              "
                            >
                                <div
                                    className="
                                      mb-5
                                      flex
                                      h-14
                                      w-14
                                      items-center
                                      justify-center
                                      rounded-2xl
                                      bg-blue-500/10
                                      text-blue-600
                                      "
                                >
                                    <Icon size={32}/>
                                </div>
                                <span
                                    className="
                                      mb-3
                                      inline-block
                                      rounded-full
                                      bg-blue-500/10
                                      px-3
                                      py-1
                                      text-xs
                                      font-semibold
                                      text-blue-600
                                  "
                                >
                  {service.category}
                </span>

                                <h3 className="text-xl font-bold text-slate-900">
                                    {service.title}
                                </h3>

                                <p className="mt-4 text-slate-600">{service.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
              <motion.div
                  initial={{
                    opacity: 0,
                    y: 30
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.7
                  }}
                  viewport={{
                    once: true
                  }}
                  className="
        mt-20
        rounded-3xl
        bg-slate-900
        p-10
        text-center
    "
              >

                <h3 className="text-3xl font-bold text-white">
                  ¿Listo para transformar tu empresa?
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                  Diseñemos juntos una solución tecnológica
                  adaptada a las necesidades de tu organización.
                </p>

                <button
                    className="
            mt-8
            rounded-xl
            bg-blue-600
            px-8
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-700
        "
                >
                  Contactar AUREON
                </button>

              </motion.div>

            </div>
        </section>
    );
}

export default Services;
