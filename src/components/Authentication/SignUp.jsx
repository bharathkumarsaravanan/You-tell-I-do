import React from "react";
import { Typography } from "@mui/material";
import {TextField,Button} from "@mui/material";
import { Link } from "react-router-dom";
import { Select } from "@mui/material";
import {MenuItem} from "@mui/material";
import { useState } from "react";

function SignUp(){

    const [value, setValue] = useState({email:'',role:'', password:'', confirm:''});
    var isThere = JSON.parse(localStorage.getItem('users'));
    var users;

    if(isThere == null){
        users = []
    }else{
        users = isThere.values;
    }

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
        console.log(value);
        if(value.email!==''&&value.role!==''&&value.password!==''&&value.confirm!==''){
            if(value.password === value.confirm){
                users.push(value)
                localStorage.setItem('users',JSON.stringify({values: users}))
                window.location.href= '/'
            }else{
                alert('Please check the password')
            }
        }else{
            alert('You have to fill all the fields')
        }
    }

    return(
        <div className="AuthPage">
            <div className="container">
                <Typography variant="h3">Sign Up</Typography>
                <TextField 
                    name="email"
                    value={value.email}
                    onChange={handleChange}
                    type='email'
                    variant="outlined"
                    label='Email'/>
                <TextField 
                    name="password"
                    type='password'
                    value={value.password}
                    onChange={handleChange}
                    variant="outlined" 
                    label='Password'/>
                <TextField 
                    name="confirm"
                    type='password'
                    value={value.confirm}
                    onChange={handleChange}
                    variant="outlined" 
                    label='Confirm'/>
                <Typography variant="h6" color='text.secondary'>Select the Role</Typography>
                <Select
                    name="role"
                    value={value.role}
                    onChange={handleChange}
                    label="Age"
                    >
                    <MenuItem value={'student'}>Student</MenuItem>
                    <MenuItem value={'master'}>Master</MenuItem>
                </Select>
                <Button variant="contained" onClick={handleClick}>Sign Up</Button>
                <Link to={'/'}>back to login</Link>
            </div>

        </div>
    )
}

export default SignUp;