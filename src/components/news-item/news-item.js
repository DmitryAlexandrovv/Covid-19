import React from 'react';

import './news-item.scss';

const NewsItem = ({title, url, urlToImage}) => {
    return(
        <a className="news__item" href={url}>
            <div style={{background: `url(${urlToImage}) center center/cover no-repeat`}} className="news__item--img">
            </div>
            <div className="news__item--title">
                {title}
            </div>
        </a>
    )
}

export default NewsItem;