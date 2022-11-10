import React from "react";
import axios from "axios";

export default class RoleList extends React.Component {
  state = {
    roles: [],
  };

  componentDidMount() {
    axios.get(`https://6257777f74007111adf7b5a8.mockapi.io/role`).then((res) => {
      console.log(res);
      this.setState({ roles: res.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.roles.map((role) => (
          <li>{role.role}</li>
        ))}
        {this.state.roles.map((role) => (
          <li>{role.menu}</li>
        ))}
      </ul>
    );
  }
}
