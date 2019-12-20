
import React from "react";


class Form extends React.Component {
  render() {
  return (
      <div>
        <form onClick={this.props.commentsMethod}>
      <input type="text" name="author" placeholder="Enter name..." required/>
      <input type="text" name="text" placeholder="Enter text..." required/>
      <button>Add</button>
    </form>
  </div>
    );
  }
}

export default Form;