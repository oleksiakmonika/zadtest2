import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Input = () => {
    const [photo, setPhoto] = useState(undefined);
    useEffect(() => {
        setPhoto({ results: results });
        console.log(photo);
    }, []);

    let results;

    return (
        <div>

            <form
                onSubmit={e => {
                    e.preventDefault();
                    location.replace(`/results/${results}`);
                    results = e.target.value;
                    console.log(results);
                }}
            >
                <h1>Unsplash</h1>
                <p>The interest's source of freely-useable images.</p>
                <p>Powered by creators everywhere.</p>
                <input type='text' placeholder='Search free high-resolution'></input>
                <p>Trending: flower, wallpapers, backgrounds, happy, love</p>
            </form>
        </div>
    );
};

export default Input;





//
// import React, {useState} from "react";
// import ReactDOM from "react-dom";
// import {Link} from 'react-router-dom';
// import axios from 'axios';
// import img from "../img/ocean-3605547_1920.jpg";
//
// const Input = () => {
//     const [photos, setPhotos] = useState([]);
//     const [result, setResult] = useState([]);
//
//     function handleChange(e) {
//         setPhotos(e.target.value)
//     }
//
//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log(photos);
//         const url = "https://api.unsplash.com/search/photos?page=1&query=" + photos + "&client_id=WCycFH5EcjkYL3ayD5-HnxIqIXfbIP3HnZ33T9EoYzc";
//         axios.get(url).then(response => {
//             console.log(response);
//             setResult(response.data.results)
//         });
//     }
//
//     return (
//         <>
//             <img style={{height:'250px', width:'700px'}} src={img}/>
//             {/*<div>*/}
//
//             {/*    <ul>*/}
//             {/*        /!*<li><Link to='/' >Strona główna</Link></li>*!/*/}
//             {/*        <li><Link to='/results' className='link'>wyniki</Link></li>*/}
//             {/*    </ul>*/}
//             {/*</div>*/}
//             <form onSubmit={handleSubmit}>
//                 <h1>Unsplash</h1>
//                 <p>The interest's source of freely-useable images.</p>
//                 <p>Powered by creators everywhere.</p>
//                 <input onChange={handleChange}   type='text' placeholder='Search free high-resolution'/>
//                 <p>Trending: flower, wallpapers, backgrounds, happy, love</p>
//             </form>
//             <ul>
//                 {result.map(photo => {
//                     return (
//                         <li key={photo.id}>
//                             <img src={photo.urls.small}/>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </>
//     )
// }
// export default Input;
//





