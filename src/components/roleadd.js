import React from "react";
import axios from "axios";

//add role from https://6257777f74007111adf7b5a8.mockapi.io/role with menu containing 2 items
export default class RoleAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      menu: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const role = {
      role: this.state.role,
      menu: this.state.menu,
    };

    axios.post(`https://6257777f74007111adf7b5a8.mockapi.io/role`, role).then((res) => {
      console.log(res);
      console.log(res.role);
      console.log(res.menu);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Role:
            <input type="text" name="role" onChange={this.handleChange} />
          </label>
          <label>
            Menu:
            <input type="text" name="menu" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
