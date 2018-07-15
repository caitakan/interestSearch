import * as React from "react";
import { RouteComponentProps } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

export interface HeaderProps {
    auth: {};
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
        const dashboard = ()=><h2>Dashboard</h2>;
        const landing = ()=><h2>Landing</h2>;
        console.log('this.props',this.props);
        return(
            <div>
                <p onClick={this._onclick.bind(this, "landing")}> testa </p>
                <p onClick={this._onclick.bind(this, "dashboard")}> testb </p>
                <a href="/dashboard"> testaaaa </a>
            </div>
        );
    }

    private _onclick(keys: string){
        console.log('onclick props  ',this.props );
    }
}