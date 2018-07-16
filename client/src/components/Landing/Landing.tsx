import * as React from "react";
import { Auth } from "../../models/RootState";
import "./Landing.css";
const Typist = require("react-typist").default;

export interface LandingProps {
    auth: Auth;
}

export interface LandingState{
    isShowName: boolean
}

export class Landing extends React.Component<LandingProps, LandingState>{
    constructor(props: LandingProps, state: LandingState){
        super(props);
        this.state = {
            isShowName: false
        }
    }

    public render(){
        console.log("landing Props ", this.props);
        const name = this.props.auth?(this.props.auth.name?this.props.auth.name:"Undefined"):"Stranger";
        if(name !== "Undefined" && !this.state.isShowName){
            this.setState({
                isShowName: true
            })
        }
        console.log('this.state  :',this.state);
        const component = (
            <Typist startDelay={1000} cursor={{element: '_', hideWhenDone: true}} >
                 Hello,&nbsp;
                <Typist.Delay ms={100} />
                    {name}.
                    
                <Typist.Delay ms={2000} />
                <br />I'm Jason.&nbsp;
                <Typist.Delay ms={1000} />
                    I'm glad to see you are here.
                    
                <Typist.Delay ms={2000} />
                <br />
                    Login to let's get to know each other more...

                <Typist.Delay ms={60000} />
            </Typist>
        )
        return (
            <div className="landing-container">
            <div className="landing-text">
                <span>{this.state.isShowName && component}</span>
            </div>
            </div>
        )
    }

    private _typingDone(){
        this.setState({
            isShowName: true
        });
    }
}