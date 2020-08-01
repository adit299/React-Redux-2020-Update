import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    // Syntax for arrow function which is also asynchronous, this solves the 
    // "this" binding issue
    onSearchSubmit = async (term) => {
        // We are using the library Axios to perform GET requests from
        // within our code.

        // We making the GET request to the /search/photos endpoint since,
        // that is what is detailed in the unsplash API documentation

        // axios.get takes two arguments, the path to which the get request
        // has to be made to, and additional configuration options

        // We are using the async and await syntax, which basically ensure that when we
        // are making asynchronous function calls, they wait until the request is satisfied
        // then execute
        const response = await unsplash.get('/search/photos', {
            // Params will contain the query terms which will accompany the
            // GET request
            params: { query: term }
        });
        // "this" in this case refers to the props object we passed to the SearchBar element
        this.setState({ images: response.data.results });
        // Whenever an axios request is made, it returns an object known as a "promise"
        // the .then() callback can be used to manipulate the data that the API call returns
        // We used a different approach to manipulate the response data
        // .then((response) => {
        //     // Using the network tab in the developer tools, we can see exactly where the pictures
        //     // are stored for the request being made
        //     console.log(response.data.results);
        // });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;


