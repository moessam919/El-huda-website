import AboutSec from "./Components/AboutSec";
import HomeSlider from "./Components/HomeSlider";
import VisionMission from "./Components/VisionMission";
import WhyChooseSec from "./Components/WhyChooseSec";

export default function Home() {
    return (
        <div className="">
            {/* hopme slider */}
            <HomeSlider />
            {/* About sec */}
            <AboutSec />
            {/* Vision Mission */}
            <VisionMission />

            {/* Why Choose Sec */}
            <WhyChooseSec />
        </div>
    );
}
