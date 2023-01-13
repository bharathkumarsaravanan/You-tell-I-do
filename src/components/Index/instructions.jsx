import React from "react";
import ReactDOM from 'react-dom';
import { Typography, Button } from "@mui/material";

function Instructions(props){

    if(!props.visible) return null

    return ReactDOM.createPortal(
        <div className="portal">
            <div>
                <Typography variant="h4">Instructions</Typography>
                <ol>
                    <li><b>This application not for valuate double digit numbers</b></li>
                    <li>You can't send your input without get a request from master</li>
                    <li>Once you received a request from master only you can send a Input</li>
                    <li>Once master received your input he will valuate and you can get the answer in activities field</li>
                    <li>your not allowed to improper inputs</li>
                </ol>
                <div>
                    <div>
                        <Typography variant="h2" style={{color:'green'}}>Do's</Typography>
                        <ul>
                            <li>four(add(two()))</li>
                            <li>nine(multiply(four(add(two()))))</li>
                        </ul>
                    </div>
                    <div>
                        <Typography variant="h2" style={{color:'red'}}>Dont's</Typography>
                        <ul>
                            <li>four(two(add))</li>
                            <li>add(four(two))</li>
                            <li>five(add(four(two)))</li>
                            <li>eight(five(add(four(two))))</li>
                        </ul>
                    </div>
                </div>
                <Button variant="contained" onClick={() => props.setVisible(false)}>Close</Button>
            </div>
        </div>, document.getElementById('portal')
    )
}

export default Instructions;