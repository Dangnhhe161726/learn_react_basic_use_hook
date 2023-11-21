import { useEffect, useState } from "react";
import "./Youtube.scss";
import moment from "moment";
import axios from "axios";

export const Youtube = () => {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');

    const handleOnClickSerch = async () => {
        let res = await axios({
            "method": "GET",
            "url": "https://www.googleapis.com/youtube/v3/search",
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'q': query,
                'key': '',
                'type': 'video'
            }
        })


        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            console.log('>> raw:', raw)
            let result = [];
            raw.map(item => {
                let object = {};
                object.id = item.id.videoId;
                object.title = item.snippet.title;
                object.publishedAt = item.snippet.publishedAt;
                object.channelTitle = item.snippet.channelTitle;
                object.description = item.snippet.description;
                result.push(object);
            })

            setVideos(result);
        }
    }
    return (
        <div className="youtube-container">
            <div className="form-search">
                <input type='text' placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleOnClickSerch}>Search</button>
            </div>
            {videos && videos.length > 0 &&
                videos.map(item => {
                    return (
                        <div className="result-search" key={item.id}>
                            <div className="result-search-left">
                                <iframe
                                    allowFullScreen
                                    width="320" height="180"
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                >
                                </iframe>
                            </div>
                            <div className="result-search-right">
                                <div className="title">{item.title}</div>
                                <div className="time-update">{moment(`${item.publishedAt}`).format('HH:mm A DD-MM-yyyy')}</div>
                                <div className="channel-title">{item.channelTitle}</div>
                                <div className="description">{item.description}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}