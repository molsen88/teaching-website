import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <Row>
                    <Col className='first-column'>
                        <Row>
                            <FontAwesomeIcon icon={faCopyright} />
                            <h3>copyright  |  Michael Olsen</h3>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Footer