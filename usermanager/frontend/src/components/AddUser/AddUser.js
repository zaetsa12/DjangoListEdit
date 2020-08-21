import React from "react";
import { Link, Redirect } from "react-router-dom";

class AddUser extends React.Component {
  state = {
    id: null,
    name: null,
    email: null,
    message: null,
    // isRedirect: false,
  };

  getName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  getEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  getMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  onAddData = () => {
    fetch("http://localhost:8000/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }),
    }).catch((err) => console.log(err.message));

    alert(this.state.name + " було додано до списку!");
    // this.setState({
    //   isRedirect: true,
    // });
  };
  render() {
    // if (this.state.isRedirect) {
    //   return <Redirect to="/" />;
    // }
    return (
      <div>
        <form onSubmit={this.onAddData}>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={this.getName}
            required
          />
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            onChange={this.getEmail}
            required
          />
          <input
            type="text"
            placeholder="Message"
            className="form-control"
            onChange={this.getMessage}
            required
          />
          <button className="btn btn-success" type="submit">
            Add new user
          </button>
        </form>
        <Link to="/" className="btn btn-link">
          Home
        </Link>
      </div>
    );
  }
}

export default AddUser;
