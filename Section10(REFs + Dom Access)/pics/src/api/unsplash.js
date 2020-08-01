import axios from 'axios';

// This file helps us clean up some of the Axios configuration within the App.js file
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID XIPy0m4vkqf9fwcrcAQue5baWkU2l58YvgJsw2pwmZw'
    }
});