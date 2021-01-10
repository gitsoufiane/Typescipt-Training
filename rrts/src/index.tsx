import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App color="red" />
  </Provider>,
  document.getElementById('root')
);

// interface AppProps {
//   color?: string;
// }
// interface AppState {
//   count: number;
// }

// const AppFnc = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };
// class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   onIncrement = (): void => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   onDecrement = (): void => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>increment</button>
//         <button onClick={this.onDecrement}>decrement</button>
//         {this.state.count}
//       </div>
//     );
//   }
// }
