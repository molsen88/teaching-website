import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faRocket, faDesktop, faArchway } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'reactstrap';



function HelpfulLinks() {
    return (

        <Row className='icon-row'>
            <Col>
                <div className='icon-cards'>
                    <FontAwesomeIcon className='icon' icon={faBook} />
                    <h1 className='icon-book-label'>Book List</h1>
                </div>
            </Col>
            <Col>
                <div className='icon-cards'>
                    <NavLink href="https://jordandistrict.org/resources/gradebook/" target="_blank">
                        <FontAwesomeIcon className='icon' icon={faRocket} />
                        <h1 className='icon-skyward-label'>Skyward</h1>
                    </NavLink>
                </div>
            </Col>
            <Col>
                <div className='icon-cards'>
                    <FontAwesomeIcon className='icon' icon={faDesktop} />
                    <h1 className='icon-link-label'>Links</h1>
                </div>
            </Col>
            <Col>
                <div className='icon-cards'>
                    <NavLink href="https://goldengatemovement.org/" target="_blank">
                        <FontAwesomeIcon className='icon' icon={faArchway} />
                        <h1 className='icon-arch-label'>Golden Gate Kids</h1>
                    </NavLink>
                </div>
            </Col>
        </Row>

    )
}


export default HelpfulLinks