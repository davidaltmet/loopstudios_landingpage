import Header from "./components/Header";
import Info from "./components/Info";
import Creation from "./components/Creation";
import Footer from "./components/Footer";
import { useState, useEffect, useRef } from "react";

const efectContHeader = () => {
  const [showAside, setShowAside] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAside(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return { showAside };
};

function App() {
  const { showAside } = efectContHeader();

  return (
    <div className="contenedor_principal overflow-hidden ">
      <div
        id="hero"
        className="section1 flex flex-col  md:block items-center w-full h-screen p-6 md:p-0 md:py-12 md:px-16 xl:py-12 xl:px-32 overflow-hidden bg-center bg-cover md:bg-cover"
      >
        <Header />
        <div
          className={`h-full flex  items-center w-full  md:w-1/2  uppercase tracking-widest transform ${
            showAside
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } duration-500`}
        >
          <h1 className=" font-alata text-4xl lg:text-6xl py-10 pl-5 pr-8 border-4 text-white">
            Immersive experiences that deliver
          </h1>
        </div>
      </div>
      <Info />
      <Creation />
      <Footer />
    </div>
  );
}

export default App;
