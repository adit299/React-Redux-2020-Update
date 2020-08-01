import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        // The moment our component is on screen, we make
        // a call to our action creator
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );    
        });
    }
      
    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    // This contains all our data from the postsReducer
    return { posts: state.posts };
};


// For the second argument, we are passing in the action creator of fetchPosts
export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);








