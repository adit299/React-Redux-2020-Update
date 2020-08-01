import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    // We are passing the images array as a prop to this particular component, then
    // we are making use of the map function to store each of this images in an image
    // tag, and storing that in an variable called images

   
    const images = props.images.map((image) => {    
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-list">{images}</div>
};

export default ImageList;


