import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import SocialStudiesModal from '../components/SocialStudiesModal'
import MathModal from '../components/MathModal'
import LanguageArtsModal from '../components/LanguageArtsModal'
import ScienceModal from '../components/ScienceModal'




class ObjectiveCards extends Component {
    render() {
        return (
            <CardGroup className="card-group-row">
                <Card>
                    <Card.Img variant="top" src={require( '../images/Social Studies.jpeg' )} />
                    <Card.Body>
                        <Card.Title className='card-title'>Social Studies</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <SocialStudiesModal />
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require( '../images/Science.jpeg' )} />
                    <Card.Body>
                        <Card.Title className='card-title'>Science</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <ScienceModal />
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require( '../images/images.jpeg' )} />
                    <Card.Body>
                        <Card.Title className='card-title'>Math</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                             content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <MathModal />
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require( '../images/Reading.jpeg' )} />
                    <Card.Body>
                        <Card.Title className='card-title'>Language Arts</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <LanguageArtsModal />
                    </Card.Footer>
                </Card>
            </CardGroup>
        )

    }
}
export default ObjectiveCards
