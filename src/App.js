// Desenvolva um contador que:
// 1 - não pode chegar abaixo de 0
// 2 - não pode chegar acima de 10

import "./styles.css";
import React from "react";

export default class App extends React.Component {
  state = {
    numero: 0
  };

  add = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  remove = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <section>
        <div className="conter">
          <button onClick={this.add}>+</button>
          <h1>{this.state.numero}</h1>
          <button onClick={this.remove}>-</button>
        </div>
      </section>
    );
  }
}
