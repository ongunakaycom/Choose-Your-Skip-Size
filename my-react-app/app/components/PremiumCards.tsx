import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./PremiumCards.css";

const PremiumCards = () => {
  const [skipData, setSkipData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkipData = async () => {
      try {
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        if (!response.ok) throw new Error("Failed to fetch skip data");
        const data = await response.json();
        setSkipData(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchSkipData();
  }, []);

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

      {loading && <p className="text-center">Loading skips...</p>}
      {error && <p className="text-center text-danger">Error: {error}</p>}

      <Row className="g-4">
        {skipData.length === 0 && !loading && !error && (
          <p className="text-center">No skips available for this area.</p>
        )}
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
