import React, {useEffect, useState} from 'react';

const axios = require('axios');

const Results = props => {

    const [photo, setPhoto] = useState({});
    const [result, setResult] = useState([]);

    setPhoto({results: props.match.params.results})

    const Ax = () => {
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + photo + "&client_id=WCycFH5EcjkYL3ayD5-HnxIqIXfbIP3HnZ33T9EoYzc";
        axios.get(url).then(response => {
            setResult(response.data.results)
        });
    }
    useEffect(() => {

       Ax()
    }, []);
    return (
        <>
            <ul>
                {result.map(photo => {
                    return (
                        <li key={photo.id}>
                            <img src={photo.urls.small}/>
                        </li>
                    );
                })}
            </ul>
        </>
    )
};

export default Results;

