import Button from "./components/Button/Buttons";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import HeroImg from "./assets/heroimage.jpg";
import { ReactComponent as ReactIcon } from "./assets/react.svg";
import { ReactComponent as Redux } from "./assets/Redux.svg";
import { ReactComponent as Nextjs } from "./assets/Nextjs.svg";
import { ReactComponent as Tailwind } from "./assets/Tailwind.svg";

function App() {
  return (
    <div className="w-full min-h-screen relative flex flex-col ">
      <Header className="w-full z-10  bg-header sticky top-0 shadow-lg">
        <Container>
          <div className="flex justify-between items-center py-[31px]">
            <h1 className="logo text-[2.085rem] text-header-logo font-black">
              Eugene
            </h1>
            <ul className="flex items-center  text-[1.25rem] gap-x-[2.5rem] text-header-text font-bold">
              <li>
                <a
                  className="hover:bg-hover-link hover:text-white-text px-3 py-2 rounded-lg "
                  href=""
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-hover-link hover:text-white-text px-3 py-2 rounded-lg "
                  href=""
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-hover-link hover:text-white-text px-3 py-2 rounded-lg "
                  href=""
                >
                  About me
                </a>
              </li>
              <li>
                <Button variant="primary">Contact me</Button>
              </li>
            </ul>
          </div>
        </Container>
      </Header>
      <div className="flex-1 flex flex-col w-full ">
        <section className="w-full flex  lg:py-[8.3rem] py-[2rem]  text-black ">
          <Container>
            <div className="flex lg:flex-row flex-col items-center gap-y-6 justify-between">
              <div className="col flex flex-col items-start gap-y-[5rem] ">
                <p>
                  <span className="text-[1.57rem] font-medium">
                    Hey, i'm Eugene
                  </span>
                  <h1 className="text-[4.4rem] font-black">
                    I'm a <span className="text-section-text">front-end</span>{" "}
                    developer
                  </h1>
                  <span className="text-[1.875rem]">
                    Created simple sites and design
                  </span>
                </p>
                <Button
                  className="bg-section-button hover:bg-section-button-hover text-[2.5rem] leading-[4.25rem] font-semibold"
                  variant="primary"
                >
                  Contact me
                </Button>
              </div>
              <div className="col flex">
                <img className=" object-contain" src={HeroImg} alt="heroImg" />
              </div>
            </div>
          </Container>
        </section>
        <section className="w-full flex  lg:py-[8.3rem] py-[2rem] bg-section-stack  text-black ">
          <Container>
            <div className="flex flex-col items-center justify-between">
              <div className="top w-full">
                <h1 className="text-[4.38rem] font-black text-white-text text-center">
                  My stack technologies
                </h1>
              </div>
              <div className="flex lg:flex-row  flex-col gap-x-[50px] gap-y-[50px] py-[68px]">
                <div className="card flex flex-1  flex-col items-center bg-section-card rounded-[10px]">
                  <ReactIcon className="w-[128px]" />
                  <span className="lg:text-[2.5rem]  text-[1.5rem] text-white-text font-black">
                    React
                  </span>
                  <div className="content py-[25px]">
                    <h1 className="lg:text-[2.2rem] text-[1.2rem]  text-center text-white-text font-semibold">
                      The library for web and native user interfaces
                    </h1>
                  </div>
                </div>
                <div className="card flex flex-1 flex-col items-center bg-section-card rounded-[10px]">
                  <Tailwind className="w-[128px]" />
                  <span className="lg:text-[2.5rem] text-[1.5rem] text-white-text font-black">
                    TailwindCSS
                  </span>
                  <div className="content py-[25px]">
                    <h1 className="lg:text-[2.2rem] text-[1.2rem]  text-center text-white-text font-semibold">
                      Rapidly build modern websites without ever leaving your
                      HTML
                    </h1>
                  </div>
                </div>
                <div className="card flex flex-1 flex-col items-center bg-section-card rounded-[10px]">
                  <Redux className="w-[128px]" />
                  <span className="lg:text-[2.5rem] text-[1.5rem] text-white-text font-black">
                    Redux
                  </span>
                  <div className="content py-[25px]">
                    <h1 className="lg:text-[2.2rem] text-[1.2rem] text-center text-white-text font-semibold">
                      The simplify library for state management in app
                    </h1>
                  </div>
                </div>
                <div className="card  flex flex-1 flex-col items-center bg-section-card rounded-[10px]">
                  <Nextjs className="w-[128px]" />
                  <span className="lg:text-[2.5rem] text-[1.5rem] text-white-text font-black">
                    NextJS
                  </span>
                  <div className="content py-[25px]">
                    <h1 className="lg:text-[2.2rem] text-[1.2rem] text-center text-white-text font-semibold">
                      Front-End and Back-End framework
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
      <div> fsdfds</div>
    </div>
  );
}

export default App;
