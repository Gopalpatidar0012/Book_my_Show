import React from 'react'
import { Container ,Row,Col,Card } from 'react-bootstrap'
import data from "./movies.json"
export const AllMovies = () => {
    console.log(data);
    return (
        <div>
            <Container fluid style={{padding:"5%",background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    { data.map((mov)=>
                    //we using (ROUTER)
                    <Col onClick={()=>{window.location.href="movies/"+mov.id}} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}> 
                        <Card>
                            <Card.Img variant="top" src="./logo512.png" />
                            <Card.Body>
                            <Card.Title>{mov.title}</Card.Title>
                            <Card.Text>
                                {mov.actor}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)}
                </Row>
            </Container>
        </div>
    )
}
