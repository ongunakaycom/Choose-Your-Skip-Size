import { Container, Row, Col, Button } from "react-bootstrap"; 
import {
  FaCrown,
  FaStar,
  FaGem,
  FaCertificate,
  FaShieldAlt,
  FaCheckCircle,
  FaRocket,
  FaBolt,
  FaAward,
  FaFire,
  FaArrowRight,
} from "react-icons/fa";

const cardData = [
  {
    icon: <FaCrown size={32} />,
    title: "Test Card",
    subtitleIcon: <FaStar />,
    description: "This is a placeholder card.",
    buttonText: "Click Me",
  },
];


const SkipSelector: React.FC = () => {
  return (
    <Container className="skip-selector-container">
      {/* JSX stuff */}
    </Container>
  );
};


export default SkipSelector;
