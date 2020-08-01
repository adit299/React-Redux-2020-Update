import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// mapStateToProps can be named anything that we want, but usually it is seen with this
// particular name. Essentially, it takes our state (located in the Redux store) and converts
// it to a prop which is viewable within our component
const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.songs };
}

// What's with the weird syntax? The second set of braces denote that we are invoking a second
// function that is returned with the call to connect, and passing that function SongList

// This line of code is what is allowing for the connection between the provider and the
// songlist component. Now we are able to access the songs from state

// The connect react-redux function is also intelligent enough that it is able to call itself
// whenever a change is detected in state, and also connect automatically ensures that a dispatch
// call encompasses the action creator function call. 
// If we were to make a function call by itself, it would have to look like dispatch(selectSong)
export default connect(mapStateToProps, { selectSong }) (SongList);


