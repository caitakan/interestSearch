import * as React from "react";
import { User } from "../../models/User";
import "./Hello.css";

export interface HelloProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export interface HelloState {
  user: User[];
}

export class Hello extends React.Component<HelloProps, HelloState>{
  constructor(props: HelloProps, state: HelloState) {
    super(props);
    this.state = {
      user: []
    }
  }

  public componentDidMount() {
    this.test();
  }

  public render() {
    console.log('states!!',this.state);
    console.log('props!', this.props);
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + this.getExclamationMarks(this.props.enthusiasmLevel || 1)}
        </div>
        <a href="/auth/google">Login with Google</a>
        <div>
          <button onClick={this.props.onDecrement}>-</button>
          <button onClick={this.props.onIncrement}>+</button>
        </div>
        
      </div>
    )
  }

  private test() {
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then((json: User[]) => this.setState({
      user: json
    }));
  }

  private getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join("!");
  }
}
