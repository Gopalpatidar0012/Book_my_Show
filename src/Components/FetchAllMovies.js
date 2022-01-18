import React from 'react'
import { Container ,Row,Col,Card } from 'react-bootstrap'
import { useEffect,useState } from 'react'
// import data from "./movies.json"
import axios from 'axios'

const FetchAllMovies = () => {

const[data,Setdata]=useState([]);
useEffect(async() => {
   
        try {
          const response = await axios.get('http://localhost:5000/movies');
          console.log(response);
          Setdata(response.data);
        } catch (error) {
          console.error(error);
        }
      
  
}, [])

   


  
    return (
        <div>
            <Container fluid style={{padding:"5%",background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    { data.map((mov)=>
                    //we using (ROUTER)
                    <Col onClick={()=>{window.location.href="movie/"+mov._id}} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}> 
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
export default FetchAllMovies;