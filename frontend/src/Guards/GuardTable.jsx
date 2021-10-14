import React from 'react'
import {Route,Redirect} from "react-router-dom"

function GuardTable({isLoggedIn,component:Component,control:Control,...rest}) {
    return (
        <Route
            {...rest}
            render={(props)=>{
                console.log(isLoggedIn);
                if (isLoggedIn){
                    return <Component control={Control} />
                }else{
                    return <Redirect to={{pathname:'/',state:{from:props.location}}}/>
                }
                
            }
            }
        />
    )
}

export default GuardTable
