

import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Card, Row, Col } from 'react-bootstrap'
import '../index.css'

const Listitem = ({ Data }) => {
    return (
        <>
            <Row>
                {Data.length >= 1 ? (Data.map((ele) => {
                    return (
                        <Col sm="12" id={ele.id}>
                            <Zoom>
                                <Card className='mt-4'>
                                    <div className='d-flex flex-wrap'>
                                        <Card.Img variant="top" src={ele.img} className='img' />
                                        <Card.Body>
                                            <div className='d-flex  justify-content-between'>
                                                <Card.Title>{ele.title}</Card.Title>
                                                <p style={{fontSize: "20px",background:'brown',color:'white',padding:'5px'}}>{ele.price}</p>
                                            </div>
                                            <Card.Text>
                                                {ele.descrption}
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Zoom>
                        </Col>
                    )
                })) : <p>لا يوجد بيانات</p>}

            </Row>

        </>
    )
}

export default Listitem;