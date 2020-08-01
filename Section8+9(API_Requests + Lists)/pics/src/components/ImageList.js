import React from 'react';

const ImageList = props => {
    // We are passing the images array as a prop to this particular component, then
    // we are making use of the map function to store each of this images in an image
    // tag, and storing that in an variable called images

    // Finally, we are returning this particular variable
    // const images = props.images.map((image) => {
    // We could remove the need to add the "image."" in each of our properties, by
    // doing the following  
    const images = props.images.map(({ description, id, urls }) => {    
        // Note that the key element only has to be passed in to the root element
        // that we are returning (so if the image tag were encompassed in a div, we
        // would have to add the key property to that)
        return <img alt={description} key={id} src={urls.regular} />
    });

    return <div>{images}</div>
};

export default ImageList;


