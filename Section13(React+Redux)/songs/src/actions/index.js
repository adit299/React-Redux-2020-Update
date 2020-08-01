// Why is this named index.js? When we import from App.js, since this file is already named
// index.js, we don't need to specify this file as the one being imported, it allows for shorthand

// Default vs Named exports: When we do an export, if we do an export default, curly braces are
// not needed around the function name. Otherwise, if it is a named export, curly braces are needed
// around the name

// REMEMBER TO EXPORT THIS VALUE, OTHERWISE IT IS NOT VIEWABLE
export const selectSong = (song) => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};






