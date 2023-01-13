import React from "react";
import { Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import Header from "./header";

function Master(){

    const [input, setInput] = useState();
    const [request, setRequest] = useState();
    var isThere = JSON.parse(localStorage.getItem('activities'))
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        if(isThere !== null){
            setActivities(isThere.values)
        }
    },[])

    useEffect(() => {
        setInterval(function(){
            if(localStorage.getItem('request')){
                setRequest(localStorage.getItem('request') === 'true')
            }
        },1000);
        localStorage.setItem('publish',true)
    },[])

    useEffect(() =>{
            console.log(request)
            if(localStorage.getItem('inputs')){
                setInput(localStorage.getItem('inputs'))
            }

        },[request])

    function sendRequest(){
        localStorage.setItem('request',true);
    }

    // operators 
    function add(value){
        return ['add', value];
    }
    function substract(value){
        return ['substract', value];
    }
    function multiply(value){
        return ['multiply', value];
    }
    function divide(value){
        return ['divide', value];
    }

    // operands 
    function one(value){

        if(value){
                if(value[0]==='add'){
                    return parseInt(value[1])+1
                }else if(value[0]==='substract'){
                    return parseInt(value[1])-1
                }else if(value[0]==='multiply'){
                    return parseInt(value[1])*1
                }else{
                    return Math.floor(parseInt(value[1])/1)
                }
            }
        else{
            return 1
        }
    }

    function two(value){

        if(value){
                if(value[0]==='add'){
                    return parseInt(value[1])+2
                }else if(value[0]==='substract'){
                    return parseInt(value[1])-2
                }else if(value[0]==='multiply'){
                    return parseInt(value[1])*2
                }else{
                    return Math.floor(parseInt(value[1])/2)
                }
        }
        else{
            return 2
        }
    }

    function three(value){

        if(value){
                if(value[0]==='add'){
                    return parseInt(value[1])+3
                }else if(value[0]==='substract'){
                    return parseInt(value[1])-3
                }else if(value[0]==='multiply'){
                    return parseInt(value[1])*3
                }else{
                    return Math.floor(value[1]/3)
                }

        }
        else{
            return 3
        }
    }

    function four(value){

        if(value){
                if(value[0]==='add'){
                    return parseInt(value[1])+4
                }else if(value[0]==='substract'){
                    return parseInt(value[1])-4
                }else if(value[0]==='multiply'){
                    return parseInt(value[1])*4
                }else{
                    return Math.floor(parseInt(value[1])/4)
                }
        }
        else{
            return 4
        }
    }

    function five(value){

        if(value){
                if(value[0]==='add'){
                    return parseInt(value[1])+5
                }else if(value[0]==='substract'){
                    return parseInt(value[1])-5
                }else if(value[0]==='multiply'){
                    return parseInt(value[1])*5
                }else{
                    return Math.floor(parseInt(value[1])/5)
                }
        }
        else{
            return 5
        }
    }

    function six(value){

        if(value){
                if(value[0]==='add'){
                    return parseInt(value[1])+6
                }else if(value[0]==='substract'){
                    return parseInt(value[1])-6
                }else if(value[0]==='multiply'){
                    return parseInt(value[1])*6
                }else{
                    return Math.floor(parseInt(value[1])/6)
                }

        }
        else{
            return 6
        }
    }

    function seven(value){

        if(value){
                if(value[0]==='add'){
                    return parseInt(value[1])+7
                }else if(value[0]==='substract'){
                    return parseInt(value[1])-7
                }else if(value[0]==='multiply'){
                    return parseInt(value[1])*7
                }else{
                    return Math.floor(parseInt(value[1])/7)
                }
        }
        else{
            return 7
        }
    }

    function eight(value){

        if(value){
                if(value[0]==='add'){
                    return parseInt(value[1])+8
                }else if(value[0]==='substract'){
                    return parseInt(value[1])-8
                }else if(value[0]==='multiply'){
                    return parseInt(value[1])*8
                }else{
                    return Math.floor(parseInt(value[1])/8)
                }

        }
        else{
            return 8
        }
    }

    function nine(value){

        if(value){
                if(value[0]==='add'){
                    return parseInt(value[1])+9
                }else if(value[0]==='substract'){
                    return parseInt(value[1])-9
                }else if(value[0]==='multiply'){
                    return parseInt(value[1])*9
                }else{
                    return Math.floor(parseInt(value[1])/9)
                }

        }
        else{
            return 9
        }
    }

    function zero(value){

        if(value){
                if(value[0]==='add'){
                    return parseInt(value[1])+0
                }else if(value[0]==='substract'){
                    return parseInt(value[1])-0
                }else if(value[0]==='multiply'){
                    return parseInt(value[1])*0
                }else{
                    return Math.floor(parseInt(value[1])/0)
                }

        }
        else{
            return 0
        }
    }

    function execute(){
        var answer = eval(input);
        setActivities(prev => [...prev, {input:input, output: answer}])
        setInput('')
    }

    function publish(){
        localStorage.setItem('activities', JSON.stringify({values: activities}))
        var pubState = JSON.parse(localStorage.getItem('publish'))
        localStorage.setItem('publish', !pubState);   
    }

    return(
        <div>
            <Header />
            <div className="index">
                    <div className="request"> 
                        <Typography variant="h6">Request a input to student</Typography>
                        <Button 
                            onClick={sendRequest}
                            variant="contained" 
                            size='small'
                            disabled={request}>{!request?'Send':'Sended'}</Button> 
                    </div>
                <div>
                    <Typography variant="h4">Inputs</Typography>
                    <div className="inputContainer">
                        <input type='text' value={input} />
                        <Button 
                            onClick={execute}
                            variant="contained" 
                            size="large">Execute</Button>
                        <Button 
                            onClick={publish}
                            variant="contained" 
                            size="large">publish</Button>
                    </div>
                </div>
                <div>
                    <Typography variant="h4">Answers</Typography>
                    <div>
                        {activities&& activities.map(activity => <Typography variant="h6">{activity.input}: {activity.output}</Typography>)}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Master;