import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
// import picture from '../images/Sun Valley Photo copy.jpeg'




function About() {
    return (
        <div>
            <Row>
                <Col>
                    <div className='about-title'>
                        <h2 className='about-title'>About</h2>
                    </div>
                </Col>
            </Row>
            <Container className="about-section">
                <Row>

                    <Col xs={6} md={4}>
                        <Image src={require( '../images/Sun Valley Photo copy.jpeg' )} className='about-image' rounded />
                    </Col>

                    <Col>
                        <div>

                            <h3 className="about-me">Hi! I am Michael Olsen and I have been at Monte Vista for 12 years. I
                                taught 6th grade for 6 years and then moved to 5th grade to teach in the Dual
                                Language Immersion program with Ms. Kang. Outside of teaching I moslty enjoy
                                watching and playing soccer or any sport for that matter. I am an avid supporter
                                of Liverpool FC, Utah Jazz, RSL, San Diego Padres and the Chargers formerly of San Diego.
                                I also enjoy playing the piano, reading, running, and road biking.
                        </h3>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}


export default About