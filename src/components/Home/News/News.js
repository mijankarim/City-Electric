import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./News.css";
import news1 from "../../../images/news1.jpg";
import news2 from "../../../images/project4.jpg";
import news3 from "../../../images/project6.jpg";

const News = () => {
  return (
    <section className="news">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <p>Latest News</p>
            <h3>News & Update</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <img src={news1} alt="news" />
            <h3 className="mt-4">Signs You May Need an Electrician</h3>
            <p>
              Phosfluorescently engage worldwide methodologies with web-enabled
              technology. Interactively coordinate proactive e-commerce via…
            </p>
            <Button>Read More</Button>
          </Col>
          <Col sm={4}>
            <img src={news2} alt="news" />
            <h3 className="mt-4">
              Understanding Your Home’s Electrical Capacity
            </h3>
            <p>
              Objectively innovate empowered manufactured products whereas
              parallel platforms. Holisticly predominate extensible testing…
            </p>
            <Button>Read More</Button>
          </Col>

          <Col sm={4}>
            <img src={news3} alt="news" />
            <h3 className="mt-4">An Overview of Electronics Industry</h3>
            <p>
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for…
            </p>
            <Button>Read More</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default News;
