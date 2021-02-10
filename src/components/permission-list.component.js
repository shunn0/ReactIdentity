import React, { Component } from "react";

import UserService from "../services/user.service";

export default class PermissionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPermissionList().then(
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
    var roles = this.state.content;
    const rows = (roles) ? roles.map(row => <tr key={row.permissionCode}>
                                      <td>{row.permissionCode}</td>
                                      <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                      <td>{row.description}</td>
                                      </tr>): null;
    return (
      <div className="container">
         {(roles) ?
        <header className="jumbotron">

          <h3>All available permissions</h3>

          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Permission Code</th>
                <th> </th>
                <th>Description</th>
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