import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Portfolio.css";
import { results } from "./cardJson.json";

const Portfolio = () => {
  return (
    <div className="card-container">
      {results.map((card, i) => {
        return (
          <Card key={i} className="card-animation" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title style={{ color: "#2127" }}>{card.title}</Card.Title>
              <Card.Text style={{ color: "#2127", fontSize: "13px" }}>
                {card.description}
              </Card.Text>
              <Button variant="primary" href={card.url}>to repository</Button>
              {
                card.deploy && (
                 <Button variant="primary" href={card.deploy} style={{ margin: "5px" }}>deploy</Button>
                )
              }
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Portfolio;
