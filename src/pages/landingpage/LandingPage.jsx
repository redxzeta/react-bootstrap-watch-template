import { Container } from "react-bootstrap";
import CarouselLayout from "./Carousel";
import "./landing.css";
const LandingPage = () => {
  return (
    <Container>
      <div className="landing">
        <h1>Landing Page</h1>
        <CarouselLayout />
      </div>
    </Container>
  );
};

export default LandingPage;
