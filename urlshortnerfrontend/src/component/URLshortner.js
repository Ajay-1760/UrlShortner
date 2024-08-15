import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function URLshortner() {
    const [shortUrl, setShortUrl] = useState('');
    const [originalUrl, setOriginalUrl] = useState('');

    function formSubmit(e) {
        e.preventDefault();

        axios
            .post("http://localhost:8082/shorten", { 'url': originalUrl }, {
                headers: { 'Content-Type': 'application/json' },
            })
            .then(response => {
                setShortUrl("http://localhost:8082/" + response.data.shortenedUrl);
                console.log(response);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

        setOriginalUrl('');
    }

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">URL Shortener</h2>
                    <form onSubmit={formSubmit} className="form-inline">
                        <div className="form-group mb-2 mr-sm-2">
                            <label htmlFor="longUrl" className="sr-only">Enter Long URL</label>
                            <input
                                id="longUrl"
                                name="longUrl"
                                placeholder="Enter URL here"
                                value={originalUrl}
                                onChange={(e) => setOriginalUrl(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Shorten URL</button>
                    </form>
                    {shortUrl && (
                        <div className="mt-4">
                            <h3>Shortened URL:</h3>
                            <p>{shortUrl}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default URLshortner;
