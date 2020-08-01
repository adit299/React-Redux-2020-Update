import React from 'react';
import ReactDOM from 'react-dom';
// Note that we don't have to add .js to the end of the component name, since
// webpack, the library that is taking care of all the import operations, will automatically
// attach a .js extension to the end of the filename
import CommentDetail from  './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

// We are making use of semanticUI here
// We are using faker to create a fake image url, to display for the avatar

const App = () => {
    return (
        <div className="ui conatiner comments">
            {/* In order to render the component, we enclose it within
            a JSX tag, note that we don't use curly braces here */}
            {/* Here we are passing "props", information which can be passed
            to a component. Note that each piece of information is unique, it only
            goes to one of the particular components */}
            <ApprovalCard>
                <CommentDetail 
                    author="Alap" 
                    timeAgo = "Today at 4:56pm" 
                    commentText = "I need Amma. I can't sleep" 
                    image={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Adit" 
                timeAgo = "Yesterday at 1:26pm" 
                commentText = "Shut up Alap!" 
                image={faker.image.avatar()}
                /> 
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Amma" 
                timeAgo = "Over a month ago" 
                commentText="Dinner's ready!" 
                image={faker.image.avatar()}
                />
            </ApprovalCard>    
        </div> 
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));

