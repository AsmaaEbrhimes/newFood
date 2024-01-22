import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../index.css'

const Catogery = ({ filtercatogery, allcategores }) => {
    const Onfilter = (cat) => {
        filtercatogery(cat)
    }
    return (
        <Row>
            <Col className='d-flex justify-content-center flex-wrap mt-3'>
                {allcategores.length >= 1 ? (allcategores.map((cat) => {
                    return (
                        <div>
                            <Button onClick={() => Onfilter(cat)} className='space mt-2' variant="outline-danger">{cat}</Button>
                        </div>
                    )
                })) : null}

            </Col>
        </Row>
    )
}



export default Catogery;