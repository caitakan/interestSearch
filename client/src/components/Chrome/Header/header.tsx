import * as React from "react";
import { RouteComponentProps } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { Auth } from "../../../models/RootState";
import "./header.css";

export interface HeaderProps {
    auth: Auth;
}

export interface HeaderState {
    selectedItem: string;
}

export class Header extends React.Component<HeaderProps, HeaderState>{
    constructor(props: HeaderProps, state: HeaderState){
        super(props);
        this.state = {
            selectedItem: ""
        };
    }

    public render(){
        let _auth: boolean =true;
        if(this.props.auth){
            if(this.props.auth.email){
                _auth = true;
            } else {
                _auth = false;
            }
        } else {
            _auth = false;
        }
        const renderComponet = () => {
            switch(_auth){
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
        console.log('header.props',this.props);
        return(
            <div className="header-container">
                <a href="/" className="header-home"><img className="header-img" src={process.env.PUBLIC_URL + '/face.svg'} /></a>
                <a href="/dashboard" className="header-nav">About Me!</a>
                <a href="/meeting" className="header-nav">Meeting with Me!</a>
                {renderComponet()}
            </div>
        );
    }

    private _onclick(keys: string){
        console.log('onclick props  ',this.props );
    }
}