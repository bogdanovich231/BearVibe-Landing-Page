import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Slider from "../../Components/Slider/Slider";
import Welcome from "../../Components/Welcome/Welcome";

function Home() {
    return (
        <>
            <Welcome />
            <About />
            <Slider />
            <Contact />
        </>
    )
}

export default Home;
