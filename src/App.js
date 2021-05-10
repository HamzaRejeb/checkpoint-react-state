import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      person: {
        fullName: "John Doe",
        bio: "FullStackjs Developer",
        imgSrc: "/Unknown.png",
        profession: "Web Developer",
        show: false,
      },
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.props.counter === "double") {
        this.setState({ id: this.state.id + this.state.id });
      } else {
        this.setState({ id: this.state.id + 1 });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleClick = () => {
    this.setState({
      id: 0,
      person: { ...this.state.person, show: !this.state.person.show },
    });
  };
  toggledButon = () => {
    return (
      <div className="btnToggled">
        {this.state.person.show ? (
          <div>
            <p>{this.state.id} seconds since componentDidMount</p>
            <div className="card">
              <img src="/Unknown.png" className="img-top" alt="john picture" />
              <div className="card-body">
                <h3>{this.state.person.fullName}</h3>
                <h5>{this.state.person.profession}</h5>
                <p>{this.state.person.bio}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Click me ^^</p>
        )}
      </div>
    );
  };
  render() {
    return (
      <div className="App">
        <button
          onClick={(e) => {
            this.handleClick();
          }}
          type="button"
          className="btn btn-primary"
        >
          Show{" "}
        </button>
        {this.toggledButon()}
      </div>
    );
  }
}

App.propTypes = {};

export default App;
