import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'







function SocialStudiesModal() {

    const [lgShow, setLgShow] = useState( false );

    return (
        <ButtonToolbar>
            <Button onClick={() => setLgShow( true )}>Social Studies</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow( false )}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" className='modal-title'>
                        This week's objectives
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </ButtonToolbar>
    );
}

export default SocialStudiesModal