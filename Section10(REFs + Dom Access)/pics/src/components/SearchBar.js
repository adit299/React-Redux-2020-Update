import React from 'react';

class SearchBar extends React.Component {
    // It is community convention to name our event handlers with on<jsx type>change
    //     
    // onInputChange(event) {
    //     // event.target.value contains the text that the user inputted
    //     // to the search bar
    //     event.target.value

    // }

    state = { term: '' };

    // This call back function blocks the standard HTML behaviour of refreshing a page after submitting
    // to a form

    // onFormSubmit(event) {
    //     event.preventDefault();
    // }

    // Note that the code above is simple shorthand for the following code below:
    // onFormSubmit: function(event) {
    //     event.preventDefault();
    // }
    // Check notes. We can see why this function leads to broken output for this. One way
    // to fix this is to use ES2015 arrow functions, which have a hidden functionality of 
    // automatically binding the value of 'this'

    onFormSubmit = event => {
        event.preventDefault();
        // We want to prevent the default behaviour of a form when submitting (simply
        // refreshing the page)

        // In App.js, we are passing a prop called onSubmit, which contains the onSearchSubmit
        // function. So with this call, we are passing to that function "this.state.term". This
        // contains the search term that we passing into SearchBar.
        this.props.onSubmit(this.state.term);
    }

    render() {
        return ( 
            <div className="ui segment">
                {/* Another solution to the context issue is to directly pass in 
                an arrow function into onSubmit like the following: */}
                {/* <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form"> */}
                {/* Why do we need parentheses here? Since we are invoking an arrow function,
                we need to ensure that the method is called, so we add the parentheses (note
                this solution works for the old onInputChange function) */}
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* To create an event handler for the text bar we pass a prop
                        called "onChange", to which we pass the "onInputChange" function
                        as a callback. Note that we do not add parenthesis to the method call,
                        because otherwise this method would be called everytime the component
                        is initialized */}
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value })} 
                        />
                        {/* Original value of onChange: onChange={this.onInputChange} */}
                        {/* Another alternate syntax for onChange would look like the following: */}
                        {/* onChange={event => console.log(event.target.value)} */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;



