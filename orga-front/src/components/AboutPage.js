import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLeaf, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const styles = {
    aboutPage: {
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      fontSize: '18px',
      backgroundColor: '#F1F8E9',
      padding: '4rem 0',
    },
    aboutHeader: {
      backgroundColor: '#4CAF50',
      color: '#FFFFFF',
      padding: '3rem 2rem',
      textAlign: 'center',
      borderRadius: '0 0 50% 50%',
      marginBottom: '4rem',
    },
    headerTitle: {
      fontSize: '2.5rem',
      marginBottom: '2rem',
      fontFamily: '"Titan One", sans-serif',
    },
    headerDescription: {
      fontSize: '1.2rem',
      maxWidth: '600px',
      margin: '0 auto',
    },
    valuesSection: {
      padding: '0 2rem',
      margin: '0 auto',
    },
    valueCard: {
      backgroundColor: '#d4d4d4',
      borderRadius: '20px',
      textAlign: 'center',
      padding: '2rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    valueIcon: {
      fontSize: '3rem',
      color: '#8BC34A',
      marginBottom: '1rem',
    },
    valueTitle: {
      fontSize: '1.5rem',
      color: '#33691E',
      marginBottom: '1rem',
      fontWeight: 'bold',
    },
    valueDescription: {
      fontSize: '1rem',
      color: '#333',
    },
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  };

  return (
    <div style={styles.aboutPage}>
      <Container fluid>
        <Row>
          <Col>
            <section style={styles.aboutHeader}>
              <h2 style={styles.headerTitle}>About Our Company</h2>
              <p style={styles.headerDescription}>
                We're passionate about creating sustainable solutions for a greener future.
              </p>
            </section>
          </Col>
        </Row>

        <Row style={styles.valuesSection}>
          <Col xs={12} md={4} className="mb-4">
            <Card
              style={styles.valueCard}
              className="h-100"
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.valueCard)}
            >
              <Card.Body>
                <FaLeaf style={styles.valueIcon} />
                <Card.Title style={styles.valueTitle}>Eco-Friendly</Card.Title>
                <Card.Text style={styles.valueDescription}>
                  Our products are designed with the environment in mind.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Card
              style={styles.valueCard}
              className="h-100"
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.valueCard)}
            >
              <Card.Body>
                <FaUsers style={styles.valueIcon} />
                <Card.Title style={styles.valueTitle}>Community-Driven</Card.Title>
                <Card.Text style={styles.valueDescription}>
                  We believe in the power of collective action for change.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Card
              style={styles.valueCard}
              className="h-100"
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.valueCard)}
            >
              <Card.Body>
                <FaLightbulb style={styles.valueIcon} />
                <Card.Title style={styles.valueTitle}>Innovative</Card.Title>
                <Card.Text style={styles.valueDescription}>
                  Constantly pushing boundaries to create better solutions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
