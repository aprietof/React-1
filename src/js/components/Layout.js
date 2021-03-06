import React from "react";

// Components
import Footer from "./Footer"
import Header from "./Header"


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome"
    };
  }

  changeTitle(title) {
    this.setState({title: title});
  }

  render() {
    return(
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
