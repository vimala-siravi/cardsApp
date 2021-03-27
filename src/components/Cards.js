import React from "react";
import { Card } from "react-bootstrap";

export default function Cards({ cardItems }) {
  return (
    <>
      {cardItems.map((cardItem) => (
        <Card
          className="d-inline-flex shadow p-3 mb-5"
          style={{
            width: "20rem",
            marginRight: "25px"
          }}
          key={cardItem.id}
        >
          <Card.Header className="App">{cardItem.id}</Card.Header>
          <Card.Body>
            <Card.Title>{cardItem.title}</Card.Title>
            <Card.Text>{cardItem.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
