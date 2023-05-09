import Header from "./Components/Header/index";
import Features from "./Components/Features/index";
import Gallery from "./Components/Gallery/index";
import Video from "./Components/Video";
import ContactForm from "./Components/Contact/ContactForm/index"
import Footer from "./Components/Footer/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Features />
      <Gallery />
      <Video />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}

export default App;
