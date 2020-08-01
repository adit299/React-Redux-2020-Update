import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        // The window variable ensures that the variable is initialized in window scope
        // only
        window.gapi.load('client:auth2', () => {
            // We are initializing the Gapi now, client Id was generated by the site when we 
            // created the API, and scope refers to the different information we can obtain from
            // the user
            window.gapi.client.init({
                clientId: '862296203852-ebua5tsepsi3qqb1kqrp817otj7unb30.apps.googleusercontent.com',
                scope: 'email'
            // Some promise syntax here, .then is executed after the gapi is fully loaded 
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // Recall that now, this.auth will store an instance of the gapi item
                // isSignedIn will store a boolean value that contains whether or not
                // the user is signed in now
                // this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                
                // Instead of calling setting state as we were doing before, we let our
                // function take care of the initialization of the value 
                this.onAuthChange(this.auth.isSignedIn.get());
                
                // Listen will invoke the call back function whenever a change is detected, in the
                // authentication status of the user
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        // When we set state, the component is rerendered and so in the process,
        // the text is updated
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() });

        // At the time, it was not explained but onAuthChange will receive a boolean argument
        // (caused by the listen function), which indicates whether the user is signed in or not

        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    }


    // A method which returns different messages depending on the value of 
    // isSignedIn in state value 
    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            ); 
        }
        else {
            return (
                <button onClick={this.onSignInClick} className="ui green google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
    mapStateToProps, 
    { signIn, signOut }
)(GoogleAuth);








