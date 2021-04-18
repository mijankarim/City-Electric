import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./News.css";
import news1 from "../../../images/news1.jpg";
import news2 from "../../../images/project4.jpg";
import news3 from "../../../images/project6.jpg";

const newsData = [
  {
    id: 1,
    title: "Signs You May Need an Electrician",
    image: news1,
    content:
      "Phosphorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via… ",
  },
  {
    id: 2,
    title: "Understanding Your Home’s Electrical Capacity",
    image: news2,
    content:
      "Objectively innovate empowered manufactured products whereas parallel platforms. Holistically predominate extensible testing…",
  },
  {
    id: 3,
    title: "An Overview of Electronics Industry",
    image: news3,
    content:
      "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for…",
  },
];

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
          {newsData.map((news) => (
            <Col sm={4} key={news.id} className="mb-5">
              <img src={news.image} alt="news.title" />
              <h4 className="mt-4">{news.title}</h4>
              <p>{news.content}</p>
              <Button>Read More</Button>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default News;
