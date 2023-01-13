import React from "react";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Keypad from "./keypad";
import Header from "./header";

function IndexPage(){

    const [request, setRequest] = useState(false);
    const [activities, setActivities] = useState([])
    var isThere = JSON.parse(localStorage.getItem('activities'));
    const [publish, setPublish] = useState(false);
    
    function requestState(){
        if(localStorage.getItem('request')){
            setRequest(localStorage.getItem('request') === 'true')
        }
        if(localStorage.getItem('publish')){
            setPublish(JSON.parse(localStorage.getItem('publish')))       
        }
    }

    useEffect(() => {
        setInterval(requestState,1000)
    },[])

    useEffect(() =>{
        if(isThere !== null){
            setActivities(isThere.values)
        }
    },[publish])
        
        return(
            <div>
                <Header />
                <div className="index">
                        <div className="request"> 
                            {request?
                                <Typography variant="h6">You have one request from master</Typography>:
                                <Typography variant="h6">No Request Found</Typography>}
                        </div>
                    <div>
                        <Typography variant="h4">Input</Typography>
                        {!request&&<Typography 
                                    style={{marginLeft:'40vw'}}
                                    variant='h5' 
                                    color='text.secondary'>
                                        Wait for the request from master
                                    </Typography>}
                        {request&&<Keypad />}
                    </div>
                    <div>
                        <Typography variant="h4">Activities</Typography>
                        <div>
                            {activities&& activities.map(activity => <Typography variant="h5">{activity.input} : {activity.output}</Typography>)}
                        </div>
                    </div>
                </div>
        </div>

    )
}

export default IndexPage;