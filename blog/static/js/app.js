import React from "react";
import Form from "./commentform";
import Comment from "./comments";





class App extends React.Component {
  
  state = {
    comments:[]
  }

  gettingComments = async (event) =>{
    event.preventDefault();
    const author = event.target.elements.author.value;
    const text = event.target.elements.text.value;
    const api_url = await fetch (`http://127.0.0.1:8000/api/`);
    const data = await api_url.json();
    this.setState({comments:data});
    }
  render() {
    let Comments = this.state.comments.map((post,index) => (
      <Comment author={author}
               text={text}
               date={created_date}/>));
  return (
      <div> 
        <Form commentsMethod={this.gettingComments}/>
        {Comment}
      </div>
    );
  }
}

export default App;