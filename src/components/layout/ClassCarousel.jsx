import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import '../../images/Mohamed-Salah-wallpaper-HD.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'



function ClassCarousel() {
    return (

        <Row className="carousel-size">
            <Col>
                <Carousel >
                    <Carousel.Item>
                        <Image src={require( '../../images/Front Room Photo.jpg' )} className='carousel-image' rounded />
                        < Carousel.Caption >
                            <div className="first-slide-section fadeIn">
                                <h3 className="carousel-labels">Welcome to Mr. Olsen's class</h3>
                                <p className="carousel-description">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                            <h6>Scroll</h6>
                            <FontAwesomeIcon className='carousel-icon' icon={faArrowDown} />
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={require( '../../images/Reading Corner.jpg' )} className='carousel-image' rounded />

                        <Carousel.Caption>
                            <h3 className="carousel-labels">Learning is fun</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={require( '../../images/Leadership Wall.jpg' )} className='carousel-image' rounded />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={require( '../../images/Sunset Beach.jpg' )} className='carousel-image' rounded />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={require( '../../images/Mountains.jpg' )} className='carousel-image' rounded />
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
