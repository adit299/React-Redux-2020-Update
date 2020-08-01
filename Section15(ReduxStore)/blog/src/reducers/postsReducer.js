
// Within this class we will maintain an array of the posts fetched

export default (state=[], action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;    
    } 
};














