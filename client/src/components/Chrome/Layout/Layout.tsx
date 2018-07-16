import * as React from "react";
import { RouteComponentProps } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Auth } from "../../../models/RootState";
import Header from "../../../containers/HeaderContainer";
import Landing from "../../../containers/LandingContainer";
// import { Landing } from "../../Landing/Landing";
import { Hello } from "../../Hello";
import "./layout.css";



export interface LayoutProps {
    actions?: any;
}

export class Layout extends React.Component<LayoutProps> {
    constructor(props: LayoutProps){
        super(props);
    }

    public componentDidMount(){
        this.props.actions.fetchUser();
    }

    public render() {
        const dashboard = () => <h2>Dashboard</h2>;
        const meeting =() => <h2>Meeting</h2>;
        const login =() => <h2>Login</h2>;
        // Create browser history to use in the Redux store
        const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href")!;
        const history = createBrowserHistory({ basename: baseUrl });
        const location = window.location.href;


        return (
            <BrowserRouter>
                <div className="layout-container">
                    <div className="layout-header">
                        <Header />
                    </div>
                    <div className="layout-body">
                        <Switch>
                            <Route path="/" exact={true}>
                            <Landing />
                            </Route>
                            <Route path={"/meeting"} component={meeting} />
                            <Route path={"/dashboard"} component={dashboard} />
                            <Route path={"/login"} component={login} />
                        </Switch>
                    </div>
                </div>
                </BrowserRouter>
        );
    }
}
