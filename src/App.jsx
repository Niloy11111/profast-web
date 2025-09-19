import Lottie from "lottie-react";
import { lazy, Suspense } from "react";
import "./App.css";
import Agents from "./components/agents/Agents";
import Banner from "./components/banner/Banner";
import ContentBottom from "./components/contentBottom/ContentBottom";
import ContentTop from "./components/contentTop/ContentTop";
import Footer from "./components/footer/Footer";
import loading from "/src/animations/loading.json";

const Navbar = lazy(() => import("./components/navbar/Navbar"));

function App() {
  return (
    <section>
      <Suspense
        fallback={
          <div className="min-h-screen  flex justify-center items-center">
            <Lottie
              className="h-[900px]  w-[1000px] mx-auto"
              animationData={loading}
              loop={true}
            />
          </div>
        }
      >
        {" "}
        <Navbar />
      </Suspense>
      <Banner />
      <ContentTop />
      <ContentBottom />
      <Agents />
      <Footer />
    </section>
  );
}

export default App;
