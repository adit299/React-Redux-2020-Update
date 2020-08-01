import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        // This is an example of a React reference, we have wired
        // it up with our image tag, so that calling it, we can obtain
        // information from the DOM about the image being rendered
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // We get a value of 0, when attempting to directly access the image's height
        // because the image's height has not been fully loaded at the point when we are
        // attempting to access it. Note that in the console, if we just printed out 
        // this.imageRef, we can click and access the clientHeight
        // console.log(this.imageRef.current.clientHeight);

        this.imageRef.current.addEventListener('load', this.setSpans);

        // To fix the earlier issue, we added an event listener to ImageRef, which only calls
        // the call back function setSpans, when the image has actually loaded, this way we 
        // can reliably access the height value
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        
        // Grid row-end takes a spans value that allows for allocating
        // the amount of space that the image requires
        // We divide by grid-auto-rows (the height) of each of the images so
        // that we can figure out how many rows the image requires
        const spans = Math.ceil(height / 10); 

        this.setState({ spans });

    }


    render() {
        // Destructured our render calls, similar to what 
        // was done in ImageList
        const { description, urls } = this.props.image;

        return (
            // After obtaining a span value and setting it to the state,
            // via the function setSpans, we can assign gridRowEnd, that particular
            // span value
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef} 
                    alt={description}
                    src={urls.regular}
                 />
            </div>
        );
    }
}

export default ImageCard;






