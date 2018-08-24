import * as React from "react";
import axios from "axios";
import { RouteComponentProps } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { Auth } from "../../../models/RootState";
import "./header.css";

// export interface HeaderProps {
//     auth: Auth;
// }

export interface HeaderState {
    selectedItem: string;
    auth: any;
}

export class Header extends React.Component<{}, HeaderState>{
    constructor(props: {}, state: HeaderState){
        super(props);
        this.state = {
            selectedItem: "",
            auth: null
        };
    }
    public componentWillMount(){
        axios
        .get("/auth/current_user")
        .then(res => {
            if(res.data.email){
                this.setState({
                    auth: true
                });
            } else {
                this.setState({
                    auth: false
                });
            }
        });
        // if(this.props.auth && this.props.auth.email){
        //     this.setState({
        //         auth: true
        //     });
        // } else if(this.state.auth){
        //     this.setState({
        //         auth: false
        //     });
        // }
        
    }
    public render(){
        // let _auth: boolean =true;
        // if(this.props.auth){
        //     if(this.props.auth.email){
        //         _auth = true;
        //     } else {
        //         _auth = false;
        //     }
        // } else {
        //     _auth = false;
        // }
        const renderComponet = () => {
            switch(this.state.auth){
                case false:
                    return(
                        <a href="/login" className="header-nav">Login</a>
                    );
                default:
                    return(
                        <a href="/auth/logout" className="header-nav">Logout</a>
                    );
            }
        }
        console.log('header state   ', this.state.auth);
        console.log('header.props',this.props);
        if(this.state.auth === null) return null;
        return(
            <div className="header-container">
                <a href="/" className="header-home"><img className="header-img" src={process.env.PUBLIC_URL + '/face.svg'} /></a>
                <a href="/dashboard" className="header-nav">About Me!</a>
                <a href="/meeting" className="header-nav">Meeting with Me!</a>
                {renderComponet()}
            </div>
        );
    }
}