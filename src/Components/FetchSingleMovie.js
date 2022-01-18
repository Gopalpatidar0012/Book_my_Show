import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
// import data from "./movies.json"
export const FetchSingleMovie = () => {
  const { movid } = useParams();

  const [SingleMovie, SetSingleMovie] = useState([]);
  useEffect(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/movie/${movid}`);
      console.log(response);
      SetSingleMovie([response.data]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <Container fluid style={{ padding: "5%", background: "pink" }}>
        <Row style={{ textAlign: "center" }}>
          {SingleMovie.map((mov) => {
            if (mov._id == movid) {
              return (
                <Col
                  id={mov._id}
                  key={mov._id}
                  xs={6}
                  md={4}
                  lg={3}
                  style={{ marginBottom: "2%" }}
                >
                  <Card>
                    <Card.Img variant="top" src="./logo512.png" />
                    <Card.Body>
                      <Card.Title>{mov.title}</Card.Title>
                      <Card.Text>{mov.actor}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    </div>
  );
};
