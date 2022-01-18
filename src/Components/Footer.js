import React from 'react'
import { Row } from 'react-bootstrap'
import  Container from 'react-bootstrap/Container'
import  Button from 'react-bootstrap/Button'
import  Col from 'react-bootstrap/Col'
// import  Row from 'react-bootstrap/Row'


 const Footer = () => {
    return (
        <div style={{background:"black",color:"white"}}>
            <Container fluid>
            <Row style={{padding:"3%"}}>
                <Col xs={2}>
                     col1
                </Col>
                <Col xs={4}>
                     col2
                </Col>
                <Col xs={6} style={{display:"flex",flexDirection:"row-reverse"}}>
                     <Button style={{background:"rgb(236,94,113)"}}>Continue Today</Button>
                </Col>
            </Row>
            <Row style={{textAlign:"center",padding:"3%",background:"grey"}}>
                <Col>
                    djasn
                </Col>
                <Col>
                    skm
                </Col>
                <Col>
                    skdk
                </Col>
            </Row>

            </Container>
        </div>
    )
}
export default Footer;