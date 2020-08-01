import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song) {
        return <div>Select a song</div>;
    }
    
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br />
                Duration: {song.duration}
            </p>
        </div>

    ); 
    
};

const mapStateToProps = state => {
    // Thanks to the provider, we have access to the state from all functional components,
    // so we are able to set the song to the selected song
    return { song: state.selectedSong }

};


// Connecting this component to the provider with this following line
export default connect(mapStateToProps)(SongDetail);






