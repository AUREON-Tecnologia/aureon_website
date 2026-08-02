import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  BrainCircuit,
  Cloud,
  Database,
  ShieldCheck,
} from "lucide-react";

function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: {
          duration: 0.8,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl"
    >
      {/* Encabezado */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl font-bold text-white">AUREON Cloud</h3>

          <p className="text-sm text-slate-400">Plataforma empresarial</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

          <span className="text-sm text-green-400">Online</span>
        </div>
      </div>

      {/* Módulos */}

      <div className="mt-6 space-y-4">
        <DashboardItem
          icon={<BrainCircuit size={20} />}
          title="Inteligencia Artificial"
          value="Activa"
        />

        <DashboardItem
          icon={<Bot size={20} />}
          title="Automatización"
          value="12 procesos"
        />

        <DashboardItem
          icon={<Cloud size={20} />}
          title="Cloud SaaS"
          value="99.9%"
        />

        <DashboardItem
          icon={<Database size={20} />}
          title="Base de Datos"
          value="Protegida"
        />

        <DashboardItem
          icon={<ShieldCheck size={20} />}
          title="Seguridad"
          value="AES-256"
        />

        <DashboardItem
          icon={<Activity size={20} />}
          title="Estado"
          value="Operativo"
        />
      </div>

      {/* Pie */}

      <div className="mt-6 rounded-2xl bg-blue-600/20 p-4">
        <p className="text-sm text-slate-300">Disponibilidad</p>

        <h2 className="text-3xl font-bold text-white">99.9%</h2>
      </div>
    </motion.div>
  );
}

interface DashboardItemProps {
  icon: ReactNode;
  title: string;
  value: string;
}

function DashboardItem({ icon, title, value }: DashboardItemProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
      <div className="flex items-center gap-3">
        <div className="text-blue-400">{icon}</div>

        <span className="text-white">{title}</span>
      </div>

      <span className="text-sm text-slate-400">{value}</span>
    </div>
  );
}

export default Dashboard;
