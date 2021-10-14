import React from 'react'
import {Route,Redirect} from "react-router-dom"

function GuardPatient({isLoggedIn,component:Component,...rest}) {
    return (
        <Route
            {...rest}
            render={(props)=>{
                console.log(isLoggedIn);
                if (isLoggedIn){
                    return <Component />
                }else{
                    return <Redirect to={{pathname:'/',state:{from:props.location}}}/>
                }
                
            }
            }
        />
    )
}

export default GuardPatient
