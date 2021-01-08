import React from 'react';
import ReactDOM from 'react-dom'


interface AppProps{
    color?: string;
}
interface AppState{
    count: number;
 }
class App extends React.Component<AppProps,AppState>{
    constructor(props: AppProps) {
        super(props);
        this.state = {count:0}
    }
    onIncrement=():void=> {
        this.setState({count:this.state.count + 1})
    }
    onDecrement = () : void => {
        this.setState({count:this.state.count - 1})
    }

    render() {
        return (
            <div>
                <button onClick={this.onIncrement}>increment</button>
                <button onClick={this.onDecrement}>decrement</button>
                {this.state.count}
            </div>)
    }
}

ReactDOM.render(<App color='red'/>,document.getElementById('root'))