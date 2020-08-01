import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        // The moment our component is on screen, we make
        // a call to our action creator
        this.props.fetchPosts();
    }
    
    
    render() {
        return <div>Post List</div>;
    }
}

// Currently, we do not have a mapStateToProps function, but we need to pass something into
// the connect function, so for now null will suffice
// For the second argument, we are passing in the action creator we made in the last video
export default connect(null, {fetchPosts})(PostList);








