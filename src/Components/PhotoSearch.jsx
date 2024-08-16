import React, { useState } from 'react';
import { createApi } from 'unsplash-js';
import { TailSpin } from 'react-loader-spinner';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const unsplash = createApi({
    accessKey: '3FgGbvS5_jVxjypva4wTqF67RNYVN8N4i3frRFzuPKs'
})

function PhotoSearch() {

    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [pictures, setPictures] = useState([]);

    const searchPhotos = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await unsplash.search.getPhotos({
                query,
            });
            if (response.errors) {
                console.error(response.errors);
            } else {
                const photos = response.response.results;
                setPictures(photos)
                setLoading(false)
            }
        } catch (error) {
            console.error(error);
        }

    }
   
    return (
        <div className='pictures_container'>
            <form className="form" onSubmit={searchPhotos}>
                <input
                    type="text"
                    placeholder={`Try 'India' or 'Flowers' `}
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
                <button type="submit" className="button">
                    Searchbciuewfenwc
                </button>
            </form>

            <div className="cards">
                {
                    loading ?
                        <div className='loading_true'>
                            <TailSpin />
                            <p>Loading...</p>
                        </div>
                        :
                        pictures.map((pic, index) => {
                            return <div key={index} className="card">
                                <LazyLoadImage src={pic.urls.full} effect="blur" />
                                {/* <img src={pic.urls.full} loading="lazy"></img> */}
                            </div>
                        })
                }
            </div>
        </div>
    );
}

export default PhotoSearch;