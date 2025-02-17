import { motion } from "motion/react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
export const ProjectCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#18181B] py-32">
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <Container>
        <div className="relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-white"
          >
            Ready to see it in action?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-200"
          >
            Immerse yourself in a modern interface and innovative approach to
            learning
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50 }}
            className="inline-block"
          >
            <Link
              to={"https://surguapp.ru/"}
              className="group relative bg-white/10 backdrop-blur-lg px-12 py-4 rounded-full font-bold text-white hover:bg-white/20 transition-all duration-300"
            >
              <span className="relative z-10">See a project</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute -inset-2 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full" />
              </div>
            </Link>
          </motion.div>
          <div className="absolute -top-20 left-1/3 w-1 h-1 bg-white rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-float delay-500" />
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float delay-1000" />
        </div>
      </Container>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};
