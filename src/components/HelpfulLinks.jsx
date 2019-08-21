import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faRocket, faDesktop } from '@fortawesome/free-solid-svg-icons'



function HelpfulLinks() {
    return (
        <div>
            <Row className='icon-row'>
                <Col>
                    <div className='icon-cards'>
                        <FontAwesomeIcon className='icon' icon={faBook} />
                        <h1 className='icon-book-label'>Book List</h1>
                    </div>
                </Col>
                <Col>
                    <div className='icon-cards'>
                        <FontAwesomeIcon className='icon' icon={faRocket} />
                        <h1 className='icon-skyward-label'>Skyward</h1>
                    </div>
                </Col>
                <Col>
                    <div className='icon-cards'>
                        <FontAwesomeIcon className='icon' icon={faDesktop} />
                        <h1 className='icon-link-label'>Links</h1>
                    </div>
                </Col>
            </Row>
        </div>
    )
}


export default HelpfulLinks