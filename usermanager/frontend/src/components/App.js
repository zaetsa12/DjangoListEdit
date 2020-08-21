import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Components
import UsersList from "../components/UsersList/usersList";
import EditUser from "../components/EditUser/EditUser";
import AddUser from "../components/AddUser/AddUser";

class App extends React.Component {
  apiURL = "http://localhost:8000/api/users/";

  state = {
    UsersList: [],
    data: [],
  };

  componentDidMount() {
    this.updateService();
  }

  updateService() {
    fetch(this.apiURL)
      .then((request) => {
        return request.json();
      })
      .then((data) => {
        this.setState({
          UsersList: data,
        });
      })
      .catch((err) => console.log(err.message));
  }

  onDeleteItem = (id) => {
    // console.log("onDeleteItem ", id);
    // console.log(this.apiURL + id);
    fetch(this.apiURL + id, {
      method: "DELETE",
    })
      .then((response) => {
        this.updateService();
        console.log(response);
      })
      .catch((err) => console.log(err.message));
  };

  onEditUser = (id) => {
    const index = this.state.UsersList.findIndex((elem) => elem.id === id);
    const currentUser = this.state.UsersList[index];
    this.setState({
      data: currentUser,
    });
  };

  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <UsersList
                  UsersList={this.state.UsersList}
                  onDeleteItem={this.onDeleteItem}
                  onEditUser={this.onEditUser}
                />
              )}
            />
            <Route path="/AddUser" exact render={() => <AddUser />} />
            <Route
              path="/EditUser"
              exact
              render={() => (
                <EditUser
                  data={this.state.data}
                  updateService={this.updateService}
                />
              )}
            />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
