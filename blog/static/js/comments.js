import React from "react";


function Comment(p) {
  render() {
  return 
   (<div>
                
                <p>{p.comment.author}</p>
                <p>{p.comment.text}</p>
                <p>{p.created_date.created_date}</p>
                  
                

             </div>
      
    );
  }
}

export default Comment;