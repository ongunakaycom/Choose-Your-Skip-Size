import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./SkipSelector.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const cardData = [
  { icon: "fa-crown", title: "Premium Card", desc: "Experience the next level of premium features with our advanced hover animations and modern design." },
  { icon: "fa-gem", title: "Elite Design", desc: "Unlock exclusive benefits with our elite membership card featuring premium effects." },
  { icon: "fa-shield-alt", title: "Modern Style", desc: "Experience state-of-the-art design with our modern premium card collection system." },
  { icon: "fa-rocket", title: "Pro Features", desc: "Take your experience to new heights with our professional-grade premium features." },
  { icon: "fa-diamond", title: "Luxury Cards", desc: "Discover the epitome of luxury with our premium card collection and features." },
  { icon: "fa-fire", title: "Elite Plus", desc: "Experience unmatched premium features with our elite plus membership tier." },
];

const CardGrid: React.FC = () => {
  return (
    <Container className="py-5">
      <Row className="g-4">
        {cardData.map((card, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="custom-card">
              <div className="card-icon">
                <i className={`fas ${card.icon} fa-2x`}></i>
              </div>
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-star"></i> {card.title}
                </Card.Title>
                <Card.Text>{card.desc}</Card.Text>
                <Button variant="primary">
                  <i className="fas fa-arrow-right"></i> Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGrid;
