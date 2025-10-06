import React from "react";
import '../API/style.css';

function PostCard(props){
    return(
        <div className="box">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    );
}

export default PostCard;