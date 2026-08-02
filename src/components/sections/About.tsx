import { motion } from "framer-motion";
import { Rocket, Target, Lightbulb } from "lucide-react";

function About() {
  return (
    <section id="nosotros" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Tecnología inteligente para empresas del futuro
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            En AUREON Tecnología SAS diseñamos soluciones digitales, software
            empresarial e inteligencia artificial para ayudar a las
            organizaciones a automatizar procesos, mejorar su productividad y
            avanzar hacia la transformación digital.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
        mt-12
        rounded-3xl
        border
        border-blue-100
        bg-gradient-to-br
        from-blue-50
        to-white
        p-10
        shadow-xl
    "
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                AUREON Tecnología SAS
              </h3>

              <p className="mt-4 text-lg text-slate-600">
                Soluciones digitales inteligentes para empresas que buscan
                automatizar procesos, optimizar operaciones y aprovechar el
                potencial de la inteligencia artificial.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-xl bg-white p-4 shadow-sm">
                🚀 Software empresarial
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm">
                🤖 Inteligencia Artificial
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm">
                ☁️ Plataformas SaaS
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm">
                ⚙️ Automatización de procesos
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-lg
        shadow-slate-200/50
        transition
    "
          >
            <Rocket className="mb-5 text-blue-600" size={40} />

            <h3 className="text-xl font-bold">Nuestra Historia</h3>

            <p className="mt-4 text-slate-600">
              AUREON nace con la visión de acercar la tecnología, la
              inteligencia artificial y la automatización a las organizaciones
              que buscan evolucionar digitalmente.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-lg
        shadow-slate-200/50
        transition
    "
          >
            <Target className="mb-5 text-blue-600" size={40} />

            <h3 className="text-xl font-bold">Nuestra Misión</h3>

            <p className="mt-4 text-slate-600">
              Crear soluciones SaaS y herramientas digitales escalables que
              permitan mejorar procesos empresariales y tomar mejores
              decisiones.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-lg
        shadow-slate-200/50
        transition
    "
          >
            <Lightbulb className="mb-5 text-blue-600" size={40} />

            <h3 className="text-xl font-bold">Nuestra Visión</h3>

            <p className="mt-4 text-slate-600">
              Convertirnos en un aliado estratégico para empresas que buscan
              transformar sus operaciones mediante tecnología e inteligencia
              artificial.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
