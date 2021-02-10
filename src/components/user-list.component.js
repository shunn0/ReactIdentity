import React, { Component } from "react";

import UserService from "../services/user.service";

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAllUserList().then(
      response => {
        this.setState({
          content: response.data.collection
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    var users = this.state.content;
    const rows = (users) ? users.map(row => <tr key={row.userName}>
                <td>{row.userName}</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>{row.email}</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>{(row.isActive)? "Yes" : "No"}</td>
                </tr>): null;
    return (
      <div className="container">
         {(users) ?
        <header className="jumbotron">

          <h3>All Registered users</h3>

          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>User Name</th>
                <th> </th>
                <th>Email</th>
                <th> </th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </header>
        : null}
      </div>
    );
  }
}