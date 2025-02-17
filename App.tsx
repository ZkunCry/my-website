import Button from "./components/Button/Buttons";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import HeroImg from "./assets/heroimage.jpg";
import Portfolio1 from "./assets/portfolio1.jpg";
import { Link } from "react-router-dom";
import Burger from "./components/Burder/Burger";
import { useRef } from "react";
import { ProjectCTA } from "./components/ProjectCta/ProjectCTA";
import { ProjectAchievements } from "./components/PorjectAchievements/ProjectAchievements";
import { ACHIEVEMENTS, FEATURES, TECHNOLOGIES } from "./utils/constants";
import { ProjectGoals } from "./components/ProjectGoals/ProjectGoals";
import { TechnologiesList } from "./components/TechnologiesList/TechnologiesList";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { KeyFeatures } from "./components/KeyFeatures/KeyFeatures";
import { FloatAnim } from "./components/FloatAnim/FloatAnim";
import { AboutSection } from "./components/AboutSection";
import { motion } from "motion/react";
function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const buttonHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full min-h-screen relative flex flex-col ">
      <Header className="w-full z-[1000]  bg-header fixed  shadow-lg">
        <Container>
          <div className="flex justify-between items-center py-[clamp(16px,5vw,31px)]">
            <Link
              to={"/"}
              className="logo text-[2.085rem] text-header-logo font-black"
            >
              Eugene
            </Link>
            <ul className="md:flex hidden  items-baseline  text-[1.25rem] md:gap-0 lg:gap-x-[2.5rem] text-header-text font-bold">
              <li>
                <Link
                  className="hover:bg-hover-link hover:text-white-text px-3 py-2 rounded-lg "
                  to={"/"}
                  onClick={() => buttonHandler(ref1)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-hover-link hover:text-white-text px-3 py-2 rounded-lg "
                  to={""}
                  onClick={() => buttonHandler(ref2)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-hover-link hover:text-white-text px-3 py-2 rounded-lg "
                  to={""}
                >
                  About me
                </Link>
              </li>
              <li>
                <Button variant="primary">Contact me</Button>
              </li>
            </ul>
            <Burger />
          </div>
        </Container>
      </Header>
      <main className="bg-zinc-900">
        <section className="flex-1 flex flex-col  w-full pt-[100px] bg-[#F3F3F3] ">
          <div className="w-full flex  lg:py-[8.3rem] py-[2rem] min-h-screen  text-black ">
            <Container>
              <div className="flex lg:flex-row flex-col items-center gap-y-6 gap-x-6 justify-between">
                <div className="col flex flex-col items-start gap-y-[5rem] w-full  justify-center ">
                  <p>
                    <span className="text-[clamp(12px,5vw,20px)] font-medium">
                      Hey, i'm Eugene
                    </span>
                    {/* <TypingText> */}
                    <h1 className="text-[clamp(30px,5vw,4.4rem)] font-black hyphens-auto">
                      I'm a <span className="text-section-text">front-end</span>{" "}
                      developer
                    </h1>
                    <span className="text-[clamp(12px,5vw,1.875rem)]">
                      Created simple sites and design
                    </span>
                  </p>
                  <Button
                    className="bg-section-button hover:bg-section-button-hover text-[clamp(16px,5vw,2.5rem)] py-[0.5rem] font-semibold"
                    variant="primary"
                  >
                    <Link to={"https://t.me/akseug"}> Contact me</Link>
                  </Button>
                </div>
                <div className="col flex max-w-[80%] rounded-[20px] ">
                  <img
                    className=" object-cover  rounded-[20px] "
                    src={HeroImg}
                    alt="heroImg"
                  />
                </div>
              </div>
            </Container>
          </div>
        </section>
        <AboutSection />
        <section
          ref={ref2}
          className="gradient-bg min-h-screen flex items-center relative overflow-hidden"
        >
          <Container className="container mx-auto px-4 py-20 relative z-10">
            <div className="flex flex-col lg:flex-row items-center lg:gap-12 gap-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Assistent Student
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  Web platform for optimizing the learning process
                </p>
                <a
                  href="#project"
                  className="bg-white text-zinc-900 px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition"
                >
                  More details
                </a>
              </motion.div>
              <FloatAnim>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center items-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl"
                >
                  <img
                    src={Portfolio1}
                    alt="Project Preview"
                    className="rounded-xl"
                  />
                </motion.div>
              </FloatAnim>
            </div>
          </Container>
        </section>
        <section id="project" className="py-20">
          <div className="container mx-auto px-4">
            <ProjectCard className="project-card bg-zinc-800 rounded-3xl p-8 mb-12">
              <h2 className="text-4xl font-bold mb-8">About project</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <ProjectGoals
                  description={
                    "Creation of a tool for automation of educational processes, reduction of time costs by 40% for students and teachers."
                  }
                />
                <ProjectAchievements achieve={ACHIEVEMENTS} />
              </div>
            </ProjectCard>
            <TechnologiesList technologies={TECHNOLOGIES} />

            <ProjectCard>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <KeyFeatures features={FEATURES} />
            </ProjectCard>
          </div>
        </section>
        <ProjectCTA />
      </main>
    </div>
  );
}

export default App;
