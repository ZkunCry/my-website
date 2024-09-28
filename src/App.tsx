import Button from "./components/Button/Buttons";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import HeroImg from "./assets/heroimage.jpg";

import Portfolio1 from "./assets/portfolio1.jpg";
import Portfolio2 from "./assets/portfolio2.jpg";
import Portfolio3 from "./assets/portfolio3.jpg";

import { ReactComponent as ReactIcon } from "./assets/react.svg";
import { ReactComponent as Redux } from "./assets/Redux.svg";
import { ReactComponent as Nextjs } from "./assets/Nextjs.svg";
import { ReactComponent as Tailwind } from "./assets/Tailwind.svg";
import { ReactComponent as HTML } from "./assets/HTML.svg";
import { ReactComponent as CSS } from "./assets/CSS.svg";
import { ReactComponent as Shadcn } from "./assets/Shadcn.svg";
import { ReactComponent as MaterialUI } from "./assets/MaterialUI.svg";
import { ReactComponent as Typescript } from "./assets/Typescript.svg";
import { ReactComponent as ReactQuery } from "./assets/reactquery.svg";

import CarouselSlider from "./components/CarouselSlider/CarouselSlider";
import { Link } from "react-router-dom";
import Burger from "./components/Burder/Burger";

function App() {
  return (
    <div className="w-full min-h-screen relative flex flex-col ">
      <Header className="w-full z-10  bg-header fixed  shadow-lg">
        <Container>
          <div className="flex justify-between items-center py-[31px]">
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
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-hover-link hover:text-white-text px-3 py-2 rounded-lg "
                  to={""}
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
      <div className="flex-1 flex flex-col  w-full pt-[100px] ">
        <section className="w-full flex  lg:py-[8.3rem] py-[2rem] min-h-screen  text-black ">
          <Container>
            <div className="flex lg:flex-row flex-col items-center gap-y-6 gap-x-6 justify-between">
              <div className="col flex flex-col items-start gap-y-[5rem] w-full  justify-center ">
                <p>
                  <span className="text-[calc(12px,5vw,1.57rem)] font-medium">
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
                  Contact me
                </Button>
              </div>
              <div className="col flex max-w-[80%]">
                <img className=" object-contain" src={HeroImg} alt="heroImg" />
              </div>
            </div>
          </Container>
        </section>

        <section className="w-full flex min-h-screen lg:py-[8.3rem] py-[2rem] bg-section-stack  text-black ">
          <Container>
            <div className="flex flex-col items-center">
              <div className="top ">
                <h1 className="text-[clamp(30px,5vw,4.38rem)] font-black text-white-text text-center">
                  Setuping tech stack
                </h1>
              </div>
              <div className="flex w-full flex-col lg:flex-row  justify-between gap-[40px]">
                <div className="col flex flex-col">
                  <h1 className="text-[clamp(16px,5vw,2rem)] text-white-text">
                    HTML/CSS
                  </h1>

                  <div className="flex  flex-wrap justify-start w-full gap-x-[40px]  gap-y-[50px] py-[68px]">
                    <div className="card  flex-1 md:flex-[0] flex transition-transform p-4 hover:-translate-y-3 translate-y-0 hover:duration-200 duration-200 ease-out  flex-col items-center bg-section-card rounded-[10px]">
                      <HTML className="w-[128px]" />
                      <span className="text-[1.5rem] text-white-text font-black">
                        HTML
                      </span>
                    </div>
                    <div className="card  flex-1 md:flex-[0] transition-transform p-4 hover:-translate-y-3 translate-y-0 hover:duration-200 duration-200 ease-out flex  flex-col items-center bg-section-card rounded-[10px]">
                      <Tailwind className="w-[128px]" />
                      <span className="text-[1.5rem] text-white-text font-black">
                        TailwindCSS
                      </span>
                    </div>
                    <div className="card   flex-1 md:flex-[0] transition-transform p-4 hover:-translate-y-3 translate-y-0 hover:duration-200 duration-200 ease-out flex  flex-col items-center bg-section-card rounded-[10px]">
                      <CSS className="w-[128px] h-full" />
                      <span className="text-[1.5rem] text-white-text font-black">
                        CSS
                      </span>
                    </div>
                    <div className="card   flex-1 md:flex-[0] transition-transform p-4 hover:-translate-y-3 translate-y-0 hover:duration-200 duration-200 ease-out flex flex-col items-center bg-section-card rounded-[10px]">
                      <Shadcn className="w-[128px]" />
                      <span className="text-[1.5rem] text-white-text font-black">
                        Shadcn
                      </span>
                    </div>
                    <div className="card   flex-1 md:flex-[0] transition-transform p-4 hover:-translate-y-3 translate-y-0 hover:duration-200 duration-200 ease-out flex flex-col items-center bg-section-card rounded-[10px]">
                      <MaterialUI className="w-[128px] h-[128px]" />
                      <span className="text-[1.5rem] text-white-text font-black">
                        MaterialUI
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col flex flex-col">
                  <h1 className="text-[clamp(16px,5vw,2rem)] text-white-text">
                    JavaScript
                  </h1>

                  <div className="flex  flex-wrap  justify-start  w-full gap-x-[40px]  gap-y-[50px] py-[68px]">
                    <div className="card  flex-1 md:flex-[0] flex transition-transform p-4 hover:-translate-y-3 translate-y-0 hover:duration-200 duration-200 ease-out  flex-col items-center bg-section-card rounded-[10px]">
                      <ReactIcon className="w-[128px]" />
                      <span className="text-[1.5rem] text-white-text font-black">
                        React
                      </span>
                    </div>

                    <div className="card  flex-1 md:flex-[0] transition-transform p-4 hover:-translate-y-3 translate-y-0 hover:duration-200 duration-200 ease-out flex  flex-col items-center bg-section-card rounded-[10px]">
                      <Redux className="w-[128px]" />
                      <span className="text-[1.5rem] text-white-text font-black ">
                        Redux
                      </span>
                    </div>
                    <div className="card   flex-1 md:flex-[0] transition-transform p-4 hover:-translate-y-3 translate-y-0 hover:duration-200 duration-200 ease-out flex flex-col items-center bg-section-card rounded-[10px]">
                      <Nextjs className="w-[128px]" />
                      <span className="text-[1.5rem] text-white-text font-black">
                        NextJS
                      </span>
                    </div>
                    <div className="card flex-1 md:flex-[0] transition-transform p-4 hover:-translate-y-3 translate-y-0 hover:duration-200 duration-200 ease-out flex flex-col items-center bg-section-card rounded-[10px]">
                      <Typescript className="w-[128px] " />
                      <span className="text-[1.5rem] text-white-text font-black">
                        Typescript
                      </span>
                    </div>
                    <div className="card   flex-1 md:flex-[0] transition-transform p-4 hover:-translate-y-3 translate-y-0 hover:duration-200 duration-200 ease-out flex flex-col items-center bg-section-card rounded-[10px]">
                      <ReactQuery className="w-[128px] h-full " />
                      <span className="text-[1.5rem] text-white-text font-black">
                        ReactQuery
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="w-full flex min-h-screen lg:py-[8.3rem] py-[2rem] bg-about-me-white  text-black ">
          <Container>
            <div className="flex items-center  justify-between gap-[5rem] flex-col lg:flex-row">
              <div className="col order-2 lg:order-1 flex flex-1">
                <img className="object-contain" src={HeroImg} alt="heroImg" />
              </div>
              <div className="col flex order-1 lg:order-2 flex-col flex-1 gap-[1.3rem]">
                <h1 className="text-[clamp(30px,5vw,4.38rem)] font-bold">
                  About me
                </h1>
                <p className=" text-[clamp(16px,2vw,2.2rem)]">
                  I am a 4th year student of Surgut State University majoring in
                  software engineering.
                </p>
                <p className="text-[clamp(16px,2vw,2.2rem)]">
                  At the moment i am developing the client side of websites and
                  gradually learning NextJS for full-stack website development.
                </p>
                <p className="text-[clamp(16px,2vw,2.2rem)]">
                  I am also working on a project for Surgut State University
                  called Student Assistant.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className="w-full flex min-h-screen  lg:py-[8.3rem] py-[2rem] bg-section-stack  text-black ">
          <Container>
            <div className="flex  justify-center gap-y-[50px]  flex-col">
              <div className="title">
                <h1 className="text-[clamp(30px,5vw,4.38rem)] font-black text-white-text">
                  Portfolio
                </h1>
              </div>
              <CarouselSlider height="600px" widthCard="500" heightCard="500">
                <CarouselSlider.Slide
                  img={Portfolio1}
                  title="Assistent student"
                  description="
                A website for students, teachers and university staff."
                  refStr="https://github.com/Tosking/SURGAPP-frontend"
                />
                <CarouselSlider.Slide
                  img={Portfolio2}
                  title="Laptake"
                  description="
            Website about selling and renting laptops
          "
                  refStr="https://github.com/Tosking/laptake"
                />
                <CarouselSlider.Slide
                  img={Portfolio3}
                  title="React admin panel"
                  description="
             Admin panel created using react and redux for the surguapp web
                application."
                  refStr="https://github.com/ZkunCry/react-admin-panel"
                />
              </CarouselSlider>
            </div>
          </Container>
        </section>
      </div>
      <div className="bg-section-stack flex items-center justify-center">
        fsd
      </div>
    </div>
  );
}

export default App;
