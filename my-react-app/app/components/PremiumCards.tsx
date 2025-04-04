import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./PremiumCards.css";

const PremiumCards = () => {
  const cardData = [
    { 
      icon: "fa-crown",
      title: "Premium Card", 
      description: "Experience the next level of premium features with our advanced hover animations and modern design.",
      buttonText: "Learn More"
    },
    { 
      icon: "fa-gem",
      title: "Elite Design", 
      description: "Unlock exclusive benefits with our elite membership card featuring premium effects.",
      buttonText: "Explore"
    },
    { 
      icon: "fa-rocket",
      title: "Pro Features", 
      description: "Take your experience to new heights with our professional-grade premium features.",
      buttonText: "Discover"
    }
  ];

  useEffect(() => {
    const cleanUpFunctions: (() => void)[] = [];

    const initCardEffects = () => {
      document.querySelectorAll<HTMLElement>('.premium-card').forEach((card) => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
          
          // Tilt effect
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const tiltX = (centerX - x) / 20;
          const tiltY = (centerY - y) / 20;
          card.style.setProperty('--tilt-x', `${tiltY}deg`);
          card.style.setProperty('--tilt-y', `${-tiltX}deg`);
        };

        card.addEventListener('mousemove', handleMouseMove);
        
        // Store cleanup function for this card
        cleanUpFunctions.push(() => {
          card.removeEventListener('mousemove', handleMouseMove);
        });
      });
    };

    initCardEffects();

    // Return cleanup function that removes all event listeners
    return () => {
      cleanUpFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  return (
    <Container className="premium-container py-5">
      <Row className="g-4">
        {cardData.map((card, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="premium-card h-100">
              <div className="card-image">
                <i className={`fas ${card.icon}`}></i>
                <div className="particles"></div>
              </div>
              <Card.Body className="premium-card-body">
                <Card.Title className="premium-title">
                  <i className={`fas ${card.icon} me-2`}></i>
                  {card.title}
                </Card.Title>
                <Card.Text className="premium-text">{card.description}</Card.Text>
                <Button variant="primary" className="premium-button">
                  {card.buttonText} <i className="fas fa-arrow-right ms-2"></i>
                </Button>
              </Card.Body>
              <div className="card-hover-light"></div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PremiumCards;