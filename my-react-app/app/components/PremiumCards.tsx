import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./PremiumCards.css";

const skipData = [
  {
    id: 17933,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 277.95,
    vat: 20,
    postcode: "NR32",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17934,
    size: 6,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 305.15,
    vat: 20,
    postcode: "NR32",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17935,
    size: 8,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 374.85,
    vat: 20,
    postcode: "NR32",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17936,
    size: 10,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 399.5,
    vat: 20,
    postcode: "NR32",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
];

const PremiumCards = () => {
  useEffect(() => {
    const cleanUpFunctions: (() => void)[] = [];

    const initCardEffects = () => {
      document.querySelectorAll<HTMLElement>(".premium-card").forEach((card) => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const tiltX = (centerX - x) / 20;
          const tiltY = (centerY - y) / 20;
          card.style.setProperty("--tilt-x", `${tiltY}deg`);
          card.style.setProperty("--tilt-y", `${-tiltX}deg`);
        };

        card.addEventListener("mousemove", handleMouseMove);
        cleanUpFunctions.push(() => {
          card.removeEventListener("mousemove", handleMouseMove);
        });
      });
    };

    initCardEffects();
    return () => {
      cleanUpFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <Container className="premium-container py-5">

      <div className="text-center mb-4">
        <div className="step-progress mb-3">
          <span>Postcode</span>
          <span>&gt;</span>
          <span>Waste Type</span>
          <span>&gt;</span>
          <span className="fw-bold text-accent">Select Skip</span>
          <span>&gt;</span>
          <span>Permit Check</span>
          <span>&gt;</span>
          <span>Choose Date</span>
          <span>&gt;</span>
          <span>Payment</span>
        </div>
        <h2 className="choose-heading">Choose Your Skip Size</h2>
        <p className="choose-subtext">Select the skip size that best suits your needs</p>
      </div>

      <Row className="g-4">
        {skipData.map((skip) => (
          <Col key={skip.id} xs={12} md={6} lg={4}>
            <Card className="premium-card h-100">
              <div className="card-image">
                <i className="fas fa-dumpster"></i>
                <div className="particles"></div>
              </div>
              <Card.Body className="premium-card-body">
                <Card.Title className="premium-title">
                  {skip.size} Yard Skip
                </Card.Title>
                <Card.Text className="premium-text">
                  <strong>Hire Period:</strong> {skip.hire_period_days} days<br />
                  <strong>Price (ex. VAT):</strong>{" "}
                  {skip.price_before_vat ? `£${skip.price_before_vat.toFixed(2)}` : "N/A"}<br />
                  <strong>On Road:</strong> {skip.allowed_on_road ? "Yes" : "No"}<br />
                  <strong>Heavy Waste:</strong> {skip.allows_heavy_waste ? "Allowed" : "Not Allowed"}
                </Card.Text>
                <Button variant="primary" className="premium-button">
                  Select This Skip <i className="fas fa-truck-loading ms-2"></i>
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
