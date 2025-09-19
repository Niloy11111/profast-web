import "./App.css";
import Agents from "./components/agents/Agents";
import Banner from "./components/banner/Banner";
import ContentBottom from "./components/contentBottom/ContentBottom";
import ContentTop from "./components/contentTop/ContentTop";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <section>
      <Navbar />

      <Banner />

      <ContentTop />

      <ContentBottom />

      <Agents />

      <Footer />
    </section>
  );
}

export default App;
