import React from 'react';
import NewsServiceContext from '../news-context';

const WithNewsService = () => (Wrapped) => {
    return (props) => {
        return(
            <NewsServiceContext.Consumer>
                {
                    (NewsService) => {
                        return <Wrapped {...props} NewsService={NewsService}></Wrapped>
                    }
                }
            </NewsServiceContext.Consumer>
        )
    }
};

export default WithNewsService;