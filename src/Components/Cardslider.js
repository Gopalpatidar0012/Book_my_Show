import React from 'react'
import  Carousel from 'react-bootstrap/Carousel'
import Card  from 'react-bootstrap/Card'
import CardGroup  from 'react-bootstrap/CardGroup'
    
export const Cardslider = () => {
    return (
        <div style={{background:"grey",padding:"5%"}}>
            <Carousel indicators={false}>
                <Carousel.Item>
                <CardGroup style={{gap:"20px",display:"flex",justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white"  style={{height:"300px",width:"300px"}}>
                        <Card.Img src="./logo512.png" alt="Card image"  style={{height:"300px",width:"300px"}} />
                        <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                        <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" >
                        <Card.Img src="./logo512.png" alt="Card image"  style={{height:"300px",width:"300px"}} />
                        <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                        <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white">
                        <Card.Img src="./logo512.png" alt="Card image"  style={{height:"300px",width:"300px"}} />
                        <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                        <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
                </Carousel.Item>

               
                <Carousel.Item>
                <CardGroup style={{gap:"20px"}}>
                    <Card className="bg-dark text-white" >
                        <Card.Img src="./logo512.png" alt="Card image"  style={{height:"300px",width:"300px"}}/>
                        <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                        <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" >
                        <Card.Img src="./logo512.png" alt="Card image"  style={{height:"300px",width:"300px"}} />
                        <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                        <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white">
                        <Card.Img src="./logo512.png" alt="Card image"  style={{height:"300px",width:"300px"}} />
                        <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                        <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
                </Carousel.Item>
          

</Carousel>
        </div>
    )
}
