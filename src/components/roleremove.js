import React from "react";
import axios from "axios";

export default class RoleRemove extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const role = {
      id: this.state.id,
    };

    axios.delete(`https://6257777f74007111adf7b5a8.mockapi.io/role/${role.id}`).then((res) => {
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
            ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Remove</button>
        </form>
      </div>
    );
  }
}
