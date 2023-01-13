import React from "react";
import { Button} from "@mui/material";
import { useState} from "react";

function Keypad(){

    const [keyValue, setKeyValue] = useState('');

    function keyClick(data){
        var {value} = data.target;
        console.log(value);
        setKeyValue(prev => {
            return value + '('+prev + ')'
        })
    }

    function handleClick(){
        if(keyValue !== ''){
            localStorage.setItem('request', false);
            localStorage.setItem("inputs", keyValue)
            setKeyValue('')
        }
    }

    return(
        <div className="keyPad">
            <input type='text' value={keyValue} placeholder="Single digits only" />
            <div className="btnGroup">
                <Button onClick={keyClick} value='one' variant="contained" size="large">1</Button>
                <Button onClick={keyClick} value='two' variant="contained" size="large">2</Button>
                <Button onClick={keyClick} value='three' variant="contained" size="large">3</Button>
                <Button onClick={keyClick} value='four' variant="contained" size="large">4</Button>
                <Button onClick={keyClick} value='five' variant="contained" size="large">5</Button>
                <Button onClick={keyClick} value='six' variant="contained" size="large">6</Button>
                <Button onClick={keyClick} value='seven' variant="contained" size="large">7</Button>
                <Button onClick={keyClick} value='eight' variant="contained" size="large">8</Button>
                <Button onClick={keyClick} value='nine' variant="contained" size="large">9</Button>
                <Button onClick={keyClick} value='zero' variant="contained" size="large">0</Button>
                <Button onClick={keyClick} value='add' variant="contained" size="large">+</Button>
                <Button onClick={keyClick} value='substract' variant="contained" size="large">-</Button>
                <Button onClick={keyClick} value='multiply' variant="contained" size="large">*</Button>
                <Button onClick={keyClick} value='divide' variant="contained" size="large">/</Button>
            </div>
            <Button 
                size="large"
                variant="contained" 
                onClick={handleClick}>send</Button>
            <Button 
                size="large"
                variant="contained" 
                onClick={() => setKeyValue('')}>clear</Button>
        </div>
    )
}

export default Keypad;