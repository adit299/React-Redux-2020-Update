import _ from 'lodash';
// By convention the lodash library is imported as an underscore, as opposed to being imported
// by name
import jsonPlaceholder from '../apis/jsonPlaceholder';

// We run into several issues, when we use the usual async await syntax in 
// handling our API call
// (1) In reality, the async await syntax is being transpiled into something
// different through the use of babel (recall that babel transpiles all the code
// we write into ES2015 syntax). Thus, in reality, this piece of code is not
// returning a valid javascript object
// (2) Then, we might think the better approach is to then eliminate the async, and
// await syntax to simply make a API call and store it in a variable. However, the issue
// with that alternate approach is that by the time the action gets to a reducer, we won't
// have fetched the data
// This is where the middleware Redux Thunk, comes into play

// This is our alternate strategy to memoizing the fetchUser function
// getState gives us access to all the data that is stored inside of redux
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // console.log("About to fetch posts");
    await dispatch(fetchPosts());
    // console.log("fetched posts!");
    // console.log(getState().posts);

    // After fetching the posts, we need to use lodash to map correctly the posts
    // to each unique userId

    // _.map allows us to loop through the array and pull out just the userId property
    // _.uniq will ensure that we only add unique userIds to our variable, no repeats
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // We loop through the userIds, and for each id we call the dispatch and fetchUser
    // function
    // userIds.forEach(id => dispatch(fetchUser(id)));

    // We can refactor the code above as the following
    // Chain is a lodash method which allows us to chain together lodash methods
    // on a particular object. Each successive lodash method, will be called with getState().posts
    // in this case

    // Chaining .value() at the end ensures all these methods are called
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();

}; 


export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};


export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};



// ** The Memoized version of the fetchUser code **
// API call to fetch users
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch)
// The underscore denotes that this function is private to other developers
// Memoizing the function ensures that we only make one call to fetch a particular user of 
// a particular id. Otherwise, we make several calls to retrieve the same amount of data
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });









