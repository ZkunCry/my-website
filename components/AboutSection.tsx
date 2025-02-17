import Container from "./Container/Container";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import HeroImg from "../assets/heroimage2.jpg";
export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1  bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-lg opacity-50" />
            <img
              src={HeroImg}
              alt="Моя фотография"
              className="relative z-10     rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About me
            </h2>

            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Hello! My name is Evgeniy, I am a professional front-end
                developer with more than 2 years of experience in developing
                modern web applications.
              </p>

              <p className="text-lg leading-relaxed">
                My passion for technology started with learning C++. Then, I
                gradually moved to front-end. Since then, I have successfully
                implemented more than 6 projects, including Student Assistant.
              </p>

              <p className="text-lg leading-relaxed">
                I specialize in designing beautiful and interactive interfaces,
                constantly improving my knowledge and following the latest
                trends in the industry. In my free time, I like to play
                volleyball, read books, and study new technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Анимированные элементы */}
      <div className="absolute -bottom-20 left-20 w-1 h-1 bg-white rounded-full animate-float" />
      <div className="absolute top-40 right-40 w-2 h-2 bg-cyan-400 rounded-full animate-float delay-500" />
    </section>
  );
};
