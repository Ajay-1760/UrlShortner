import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function OriginalUrl() {
    const [shortUrl, setShortUrl] = useState('');
    const [originalUrl, setOriginalUrl] = useState('');

    function originalUrlFormSubmit(e) {
        e.preventDefault();

        axios
            .post("http://localhost:8082/original", { 'url': shortUrl }, {
                headers: { 'Content-Type': 'application/json' },
            })
            .then(response => {
                setOriginalUrl("http://localhost:8082/" + response.data.originalUrl);
                console.log(response);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

        setShortUrl('');
    }

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Get Original Url</h2>
                    <form onSubmit={originalUrlFormSubmit} className="form-inline">
                        <div className="form-group mb-2 mr-sm-2">
                            <label htmlFor="longUrl" className="sr-only">Enter Long URL</label>
                            <input
                                id="shortUrl"
                                name="shortUrl"
                                placeholder="Enter shortUrl here"
                                value={shortUrl}
                                onChange={(e) => setShortUrl(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Original URL</button>
                    </form>
                    {originalUrl && (
                        <div className="mt-4">
                            <h3>Original URL:</h3>
                            <p>{originalUrl}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default OriginalUrl;