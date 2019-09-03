import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'







function LanguageArtsModal() {

    const [lgShow, setLgShow] = useState( false );

    return (
        <ButtonToolbar>
            <Button onClick={() => setLgShow( true )}>Language Arts</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow( false )}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        This week's objectives
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <div>
                                Comprehension
                            </div>
                        </Col>
                        <Col>
                            <div>
                                Fluency
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                Vocabulary Words
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </ButtonToolbar>
    );
}

export default LanguageArtsModal