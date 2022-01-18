import React from 'react'
import  Carousel from 'react-bootstrap/Carousel'
import Card  from 'react-bootstrap/Card'
import CardGroup  from 'react-bootstrap/CardGroup'

export const Premiers = () => {
    return (
             
            <div style={{background:"rgb(43,49,72)",padding:"5%"}}>
            <h2 style={{color:"white"}}>Premier</h2>
            <Carousel indicators={false} variant="dark">
                <Carousel.Item>
               <CardGroup style={{gap:"20px",display:"flex",justifyContent:"space-around"}}>
            <Card>
                <Card.Img variant="top" src="./logo512.png" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
               
            </Card>
            <Card>
                <Card.Img variant="top" src="./logo512.png" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
               
            </Card>
            <Card>
                <Card.Img variant="top" src="./logo512.png" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
               
            </Card>
            </CardGroup>
                </Carousel.Item>



                <Carousel.Item>
               <CardGroup style={{gap:"20px",display:"flex",justifyContent:"space-around"}}>
            <Card>
                <Card.Img variant="top" src="./logo512.png" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
               
            </Card>
            <Card>
                <Card.Img variant="top" src="./logo512.png" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
               
            </Card>
            <Card>
                <Card.Img variant="top" src="./logo512.png" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
               
            </Card>
            </CardGroup>
                </Carousel.Item>



               
                
          

</Carousel>
 
        </div>
    )
}
