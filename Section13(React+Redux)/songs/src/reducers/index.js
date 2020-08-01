import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'TROLLZ (with Nicki Minaj)', duration: '3:23' },
        { title: 'Lockdown', duration: '3:33' },
        { title: 'Babylon', duration: '2:41' },
        { title: 'In Your Eyes (with Doja Cat)', duration: '3:57' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
};

// Combine reducers packages all the reducers into one package for ease of access
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

