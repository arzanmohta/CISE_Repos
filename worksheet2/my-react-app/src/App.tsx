// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { Component } from "react";
interface State {
count: number;
}
class App extends Component<{}, State> {
constructor(props: {}) {
super(props);
this.state = {
count: 0,
};
}
makeIncrementer = (amount: number) => () =>
this.setState((prevState: State) => ({
count: prevState.count + amount,
}));
increment = this.makeIncrementer(1);
render() {
return (
<div>
<p>Count: {this.state.count}</p>
<button className="increment" onClick={this.increment}>
Increment count
</button>
</div>
);
}
}
export default App;