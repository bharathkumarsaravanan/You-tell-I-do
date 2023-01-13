import React from "react";
import { Typography } from "@mui/material";
import {TextField,Button} from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Login(){

    const[value, setValue] = useState({email: '', password:''});
    const[users, setUsers] = useState([])

    useEffect(() => {
        if(localStorage.getItem('users')){
            setUsers(JSON.parse(localStorage.getItem('users')).values)
        }
    },[]);

    function handleChange(data){
        var {name, value} = data.target;
        setValue(prev => {
            return{
                ...prev,
                [name]: value,
            }
        })
    }

    function handleClick(){
        console.log(users);
        if(localStorage.getItem('users')){
            users.map(user => {
                if(user.email === value.email && user.password === value.password){
                    window.location.href = '/index/'+ user.email + '/' + user.role
                }
            })
        }else{
            alert('no user found')
        }

    }
    
    return(
        <div className="AuthPage">
            <div className="container">
                <Typography variant="h3">Login</Typography>
                <TextField 
                    name="email"
                    value={value.email}
                    onChange={handleChange}
                    variant="outlined" 
                    label='Email'/>
                <TextField 
                    type='password'
                    name="password"
                    value={value.password}
                    onChange={handleChange}
                    variant="outlined" 
                    label='password'/>
                <Button variant="contained" onClick={handleClick}>Login</Button>
                <Link to={'/signup'}>Sign up</Link>
            </div>

        </div>
    )
}

export default Login;