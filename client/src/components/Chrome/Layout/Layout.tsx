import * as React from "react";
import { RouteComponentProps } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "../../../containers/HeaderContainer";
import { Hello } from "../../Hello";

export interface LayoutProps {
    actions: any;
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
        const landing = () => <h2>Landing</h2>;
        // Create browser history to use in the Redux store
        const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href")!;
        const history = createBrowserHistory({ basename: baseUrl });
        const location = window.location.href;
        return (
            <div>
                <Header />
                <BrowserRouter>
                    <div>
                        <Route path="/" exact={true} component={Hello} />
                        <Route path="/landing" component={landing} />
                        <Route path="/dashboard" component={dashboard} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
