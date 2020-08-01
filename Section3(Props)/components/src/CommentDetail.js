// Steps to creating a reusable, configurable component:
// (1) Identify JSX that appears to be duplicated
// (2) Create a new file to house the component, name it something descriptive (note
// the syntax used in naming this file, the component must have the same name as the 
// file)
// (3) Make the component configurable by using React's 'props' system
import React from 'react';
// import faker from 'faker';

const CommentDetail = props => {
    return(
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.image}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {props.timeAgo}
                        </span>
                    </div>
                    <div className="text">
                        {props.commentText}
                    </div>
               </div>
        </div>
    );
};

// This line of code is what allows us to export the component, and make it available
// to other files
export default CommentDetail;










