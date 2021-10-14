import React from 'react'
import {Button} from "react-bootstrap";
import './BackButton.scss'
function BackButton({route}) {
    return (
        <div className="back">
            <Button href={route} className="mt-3" variant="warning"><i className="fas fa-long-arrow-alt-left"></i></Button>
        </div>  
    )
}

export default BackButton
