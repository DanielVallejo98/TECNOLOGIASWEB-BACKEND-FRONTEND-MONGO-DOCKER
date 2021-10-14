import React from 'react'
import { Card, Col } from "react-bootstrap";
import "./MyCard.scss"
import {Link} from "react-router-dom"
function MyCard(props) {
    return (
        <Col sm={12} md={6} lg={3} className="margin-bottom ">
            <Card  className=" my-card text-center h-100 " >

                <div className="content">
                    <Card.Header style={{fontSize:'2rem'}}>{props.header}</Card.Header>
                    <Card.Img variant="top" src={props.link} className="height-img"/>
                    <Card.Body className="height-body">
                    <Card.Title >{props.title}</Card.Title>
                    <Card.Text style={{textAlign:'left'}}>
                        {props.text}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link className="justify-content-end button" to={props.route}>
                            {props.msgBtn}
                        </Link>
                    </Card.Footer>
                </div>

            </Card>
        </Col>
    )
}

export default MyCard
