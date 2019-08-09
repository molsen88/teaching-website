import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Schedules() {
    return (
        <div>
            <Row>
                <Col>
                    <div className='about-title'>
                        <h2 className='about-title'>Schedules</h2>
                    </div>
                </Col>
            </Row>
            <Row className='schedules-info'>
                <Col className='morning-schedule'>
                    <div>
                        <h1 className='schedule-title'>
                            Morning Schedule
                        </h1>
                    </div>
                    <Row>
                        <Col>
                            <div className='schedule-list'>
                                <h3 className='schedule-morning'>
                                    <ul>
                                        <li>8:55-School Starts</li>
                                        <li>9:00-Self Start</li>
                                        <li>9:15-Math</li>
                                        <li>10:00-Language Arts</li>
                                        <li>10:35-Rainbow Groups</li>
                                        <li>11:15-Language Arts</li>
                                        <li>12:20-Lunch</li>
                                    </ul>
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className='afternoon-schedule'>
                    <div>
                        <h1 className='schedule-title'>
                            Afternoon Schedule
                        </h1>
                    </div>
                    <Row>
                        <Col>
                            <div className='schedule-list'>
                                <h3 className='schedule-morning'>
                                    <ul>
                                        <li>1:00-Self-Start</li>
                                        <li>1:15-Math</li>
                                        <li>2:00-Language Arts</li>
                                        <li>2:30-Recess</li>
                                        <li>2:45-Language Arts</li>
                                        <li>3:30-Clean up</li>
                                        <li>3:35-School Ends</li>
                                    </ul>
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className='friday-schedule'>
                    <div>
                        <h1 className='schedule-title'>
                            Friday Schedule
                        </h1>
                    </div>
                    <Row>
                        <Col>
                            <div className='schedule-list'>
                                <h3 className='schedule-morning'>
                                    <ul>
                                        <li>8:55-School Starts</li>
                                        <li>9:00-Morning Class</li>
                                        <li>10:45-Afternoon Class</li>
                                        <li>11:00-Recess</li>
                                        <li>12:20-Lunch</li>
                                        <li>1:00-Afternoon Class</li>
                                        <li>1:30-Sharpen the Saw</li>
                                    </ul>
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}



export default Schedules