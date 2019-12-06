import auth0 from "auth0-js";
import React, { Component } from "react";

class LoginCallback extends Component{

    logout = () => {
        auth0.logout({
            returnTo: window.location.origin
        })
    }

    render(){
        return(
            <div>
                <p>Login successful!</p>
                <button onClick={this.logout}>LOGOUT</button>
            </div>
        )
    }

}



export default LoginCallback;