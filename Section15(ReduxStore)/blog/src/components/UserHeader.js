import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    
    render() {
        // Example of deconstructing a value, now user is equivalent to 
        // this.props.user.
        const { user } = this.props;

        if(!user) {
            return null;
        }
        
        return <div className="header">{user.name}</div>;
    }
}

// mapStateToProps receives its own copy of props known as "ownProps" so we have
// refactored the code so that the bulk of logic to identify the user is done in here
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};


export default connect(mapStateToProps)(UserHeader);