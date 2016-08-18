import React from "react";
// require('react');
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render () {
    return (
      <h1>it works, andees</h1>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
