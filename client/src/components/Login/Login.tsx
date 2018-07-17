import * as React from "react";
import "./Login.css";
const Typist = require("react-typist").default;

export class Login extends React.Component {
    public render(){
        return (
            <div className="login-container">
            <div className="login-text">
                <span><Typist startDelay={1000} cursor={{element: '_'}} >
                 I know you don't want to register a new account :)
                <Typist.Delay ms={2000} />
                <br />
                <Typist.Delay ms={500} />
                So let's just use the OAuth.
                <Typist.Delay ms={1000} />  
                <br />
                <Typist.Delay ms={500} />
                Currently I only support Google OAuth for demo.
                <Typist.Delay ms={1000} />  
                <br />
                <Typist.Delay ms={500} />
                I will support more later...
                <Typist.Delay ms={2000} />  
                 .<Typist.Delay ms={1000} />.<Typist.Delay ms={1000} />.
                <Typist.Delay ms={3000} />  
                <br />
                <Typist.Delay ms={500} />
                At least I hope so...
            </Typist></span>
            </div>
            <a href="/auth/google">
            <img className="login-button" />
            </a>
            </div>
        )
    }
}