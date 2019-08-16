import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import '../images/Mohamed-Salah-wallpaper-HD.jpg'



function ClassCarousel() {
    return (

        <Row className="carousel-size">
            <Col>
                <Carousel >
                    <Carousel.Item>
                        <Image src={require( '../images/Sun Valley Photo copy.jpeg' )} className='carousel-image' rounded />
                        <Carousel.Caption>
                            <h3 className="carousel-labels">First slide label</h3>
                            <p className="carousel-description">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={require( '../images/Mohamed-Salah-wallpaper-HD.jpg' )} className='carousel-image' rounded />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={require( '../images/Mohamed-Salah-wallpaper-HD.jpg' )} className='carousel-image' rounded />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={require( '../images/Sun Valley Photo copy.jpeg' )} className='carousel-image' rounded />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={require( '../images/Sun Valley Photo copy.jpeg' )} className='carousel-image' rounded />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    )
}

export default ClassCarousel
