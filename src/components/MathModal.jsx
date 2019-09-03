import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'







function MathModal() {

    const [lgShow, setLgShow] = useState( false );

    return (
        <ButtonToolbar>
            <Button onClick={() => setLgShow( true )}>Math</Button>
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
                <Modal.Body>...</Modal.Body>
            </Modal>
        </ButtonToolbar>
    );
}

export default MathModal