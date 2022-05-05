import Promotion from "../../components/Promotion/Promotion";
import Services from "../../components/Services/Services";
import Slider from "../../components/Slider/Slider";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import FooterSlider from "../../components/FooterSlider/FooterSlider";
import HomeMenuDemoList from "../../components/HomeMenuDemoList/HomeMenuDemoList";
import HomeMenuDemoList2 from "../../components/HomeMenuDemoList/HomeMenuDemoList2";

const Home = () => {
    return (
      <div>
        <Slider />
        <Services />
        <HomeAbout />
        <Promotion />
        <HomeMenuDemoList/>
        <HomeMenuDemoList2/>
        <FooterSlider />
      </div>
    );
  };
  
  export default Home;