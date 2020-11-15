import React, {useEffect, useState} from 'react';

const Results = props => {

    const [photo, setPhoto] = useState({result: undefined});
    const [result, setResult] = useState([]);
    setPhoto({results: props.match.params.results})

    useEffect(() => {

        ax()
    }, []);

        const ax = async () => {
        const response = await fetch("https://api.unsplash.com/search/photos?page=1&query=" + photo + "&client_id=WCycFH5EcjkYL3ayD5-HnxIqIXfbIP3HnZ33T9EoYzc");
        const data = await response.json();
        setResult(data.results);
    };

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
