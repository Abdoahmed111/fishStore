import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./styles/mainSlider.css";

export default function MainSlider() {
  return (
    <AwesomeSlider bullets={false} className="mainSlider">
      <div
        className="mainSlider__slide"
        style={{ backgroundImage: "url('../../assets/slide1.jpg')" }}
      ></div>
      <div
        className="mainSlider__slide"
        style={{ backgroundImage: "url('../../assets/slide1.jpg')" }}
      ></div>
      <div
        className="mainSlider__slide"
        style={{ backgroundImage: "url('../../assets/slide1.jpg')" }}
      ></div>
    </AwesomeSlider>
  );
}
