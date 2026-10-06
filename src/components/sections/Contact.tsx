import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { sendEmail } from "@/api/sendEmail";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false,
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      await sendEmail(form);

      alert("Mensaje enviado correctamente.");

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
        consent: false,
        website: "",
      });
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar el mensaje.",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contacto" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            Hablemos de tu próximo proyecto
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Cuéntanos tu necesidad tecnológica y encontremos una solución
            inteligente para tu empresa.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* Información */}

          <div className="space-y-6 text-white">
            <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-5
                  backdrop-blur"
            >
              <div className="flex items-center gap-4">

                <Mail className="text-blue-400" />

                <div>
                  <p className="text-sm text-slate-400">
                    Correo
                  </p>

                  <p>
                    contacto@aureontec.com
                  </p>
                </div>

              </div>
            </div>

            <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-5
                  backdrop-blur"
            >
              <div className="flex items-center gap-4">

                <Phone className="text-blue-400" />

                <div>
                  <p className="text-sm text-slate-400">
                    Teléfono
                  </p>
                  <p>
                    +57 000 000 0000
                  </p>
                </div>

              </div>
            </div>

            <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-5
                  backdrop-blur            "
            >
              <div className="flex items-center gap-4">

                <MapPin className="text-blue-400" />

                <div>
                  <p className="text-sm text-slate-400">
                    Ubicación
                  </p>

                  <p>
                    Colombia
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Formulario */}

          <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white
                p-8
                shadow-2xl"
          >
            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >
              <input
                  type="text"
                  placeholder="Nombre"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                  }
                  className="
                     w-full
                     rounded-xl
                     border
                     border-slate-200
                     bg-slate-50
                     p-3
                     outline-none
                     transition
                     focus:border-blue-500
                     focus:ring-2
                     focus:ring-blue-500/20"
              />

              <input
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  maxLength={200}
                  value={form.email}
                  onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                  }
                  className="
                     w-full
                     rounded-xl
                     border
                     border-slate-200
                     bg-slate-50
                     p-3
                     outline-none
                     transition
                     focus:border-blue-500
                     focus:ring-2
                     focus:ring-blue-500/20"
              />

              <input
                  type="text"
                  placeholder="Empresa"
                  maxLength={150}
                  value={form.company}
                  onChange={(e) =>
                      setForm({
                        ...form,
                        company: e.target.value,
                      })
                  }
                  className="
                     w-full
                     rounded-xl
                     border
                     border-slate-200
                     bg-slate-50
                     p-3
                     outline-none
                     transition
                     focus:border-blue-500
                     focus:ring-2
                     focus:ring-blue-500/20"
              />

              <textarea
                  placeholder="Cuéntanos sobre tu proyecto"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                  }
                  className="
                     w-full
                     rounded-xl
                     border
                     border-slate-200
                     bg-slate-50
                     p-3
                     outline-none
                     transition
                     focus:border-blue-500
                     focus:ring-2
                     focus:ring-blue-500/20"
              />

              {/* Honeypot: oculto para personas; si llega con valor, el servidor lo descarta. */}
              <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={form.website}
                  onChange={(e) =>
                      setForm({
                        ...form,
                        website: e.target.value,
                      })
                  }
                  className="absolute left-[-9999px] h-px w-px opacity-0"
              />

              <label className="flex items-start gap-3 text-sm text-slate-600">
                <input
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={(e) =>
                        setForm({
                          ...form,
                          consent: e.target.checked,
                        })
                    }
                    className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                />
                <span>
                  Autorizo a AUREON TECNOLOGIA S.A.S. a tratar mis datos para
                  responder esta solicitud, según la{" "}
                  <a
                      href="/privacidad/"
                      target="_blank"
                      rel="noopener"
                      className="font-medium text-blue-600 underline"
                  >
                    Política de Tratamiento de Datos Personales
                  </a>
                  .
                </span>
              </label>

              <Button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    rounded-xl
                    bg-blue-600
                    py-6
                    text-base
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                    disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Contact;
