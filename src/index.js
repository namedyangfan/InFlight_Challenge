import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: "Yahoo!", link: "www.yahoo.com" },
        { name: "AltaVista", link: "www.altavista.com" },
        { name: "Google", link: "www.google.com" }
      ]
    };
  }

  renderAlert = e => {
    console.log(e.target);
    alert("index:" + e.target.id + "\nhref: " + e.target.href);
  };
  render() {
    return (
      <div>
        {this.state.links.map((link, index) => (
          <li key={index}>
            <a id={index} href={link.link} onClick={this.renderAlert}>
              {link.name}
            </a>
          </li>
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
