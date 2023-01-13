import React from "react";
import { Typography, Button } from "@mui/material";
import { useState } from "react";
import Instructions from "./instructions";

function Header(){

    const [pop, setPop] = useState(false);

    function logout(){
        localStorage.removeItem('request')
        localStorage.removeItem('activities')
        localStorage.removeItem('publish')
        localStorage.removeItem('inputs')
        window.location.href ='/'
    }

    return(
        <div className="header">
            <Instructions visible={pop} setVisible={setPop} />
            <Typography variant="h3">You tell, I do</Typography>
            <Button
                style={{position:'absolute', right:'2rem', top:'.5rem'}} 
                onClick={logout}
                variant="contained" 
                size="small">Logout</Button>
            <Button
                style={{position:'absolute', right:'2rem', top:'4rem'}} 
                onClick={() => setPop(true)}
                variant="contained" 
                size="small">Instructions</Button>

        </div>
    )
}

export default Header;