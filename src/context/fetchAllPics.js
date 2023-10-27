// importing all requirements
import axios from 'axios';
import React, { createContext, useState, useContext, useEffect} from 'react';

// creating and exporting context using custom-hook
const FetchImageContext = createContext(null);
export const useFetchImage = () => {
    return useContext(FetchImageContext);
};

// creating provider
export const FetchImageProvider = (props) => {

    // access key for the unsplash api
    const API_KEY = "JkvPSgnalbX3LRXHuVaVdQS9wA9qyho36F-OgZZc6qY";  // this must be in .env file, but for assignment it will be here to ease of setup and use

    // contain all the iamges as array
    const [allImages, setAllImages] = useState([]);

    // now call the api, when page reloaded
    useEffect(() => {
        // to abort the api request
        const cancelToken = axios.CancelToken.source();

        // to get the data from all pages
        let url = `https://api.unsplash.com/photos/?client_id=${API_KEY}&page=1`;

        // now, fetch the data from the api
        axios.get(url, { cancelToken: cancelToken.token })
            .then(res => {
                setAllImages(res.data);
                console.log("got images")
            })
            .catch(err => {  // encountered errors while fetching images
                if (!axios.isCancel(err)) {  // request is aborted
                    console.log(err);  // handle errors
                }
            });

        // writing the clean up code
        return () => {
            cancelToken.cancel();
        }
    }, []);

    // the page number to get the content
    const [pageNumber, setPageNumber] = useState(2);

    // now, fetching more data to implement pagination
    const fetchMoreImages = async (req, res) => {

        const val = 1;  // to increase the page number

        // now, fetch the more data from the next page
        const url = `https://api.unsplash.com/photos/?client_id=${API_KEY}&page=${pageNumber}`;

        // now, fetch the images
        axios.get(url)
            .then(res => {
                setAllImages(allImages.concat(res.data));
                setPageNumber(pageNumber + val);
                console.log(allImages)
            })
            .catch(err => {  // encountered errors while fetching images
                if (!axios.isCancel(err)) {  // request is aborted
                    console.log(err);  // handle errors
                }
            });
    };

    // return the provider and list of photos
    return (
        
        // wrapping all childrens
        <FetchImageContext.Provider value={{ allImages, setAllImages, fetchMoreImages }}>
            {props.children}
        </FetchImageContext.Provider>
    );
}