import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home = () => {
  return (
    <div>
      <Navbar bg="primary" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
      <Container >
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="w-100 d-block"
              src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100  "
              src="https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
              style={{ objectFit: 'cover',height:'300px' }}
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100"
              src="https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
              style={{ objectFit: 'cover', height:'300px' }}
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      
      </Container>
      </section>
      <div>
        <Container className="mt-2">
      <Row>
        <Col>
        <img
              className="w-100"
              src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
              
            />
        </Col>
        <Col>
        Hybrid work in an uncertain economic climate is causing many leaders to rethink how to scale meaningful connections among their distributed teams.
         More than half (51 percent) of employees surveyed for our Work Trend Index say relationships outside their immediate work group have weakened.
         1 At the leadership level, building social capital is crucial to the success of workplace culture. 
         In fact, 68 percent of business decision-makers view cohesion and social connections within teams as a moderate to strong challenge due to the shift to hybrid work.
        </Col>
      </Row>
      </Container>
      </div>
    </div>
  );
};

export default Home;
