import React, {Component} from 'react';
import {connect} from 'react-redux';
import {WithNewsService} from '../hoc';
import {newsLoaded, newsRequested} from '../../actions';
import {withRouter} from 'react-router-dom';
import Error from '../error';
import Spinner from '../spinner';
import NewsItem from '../news-item';

import './news-list.scss';

class NewsList extends Component {
    render(){
        const {news, loading, error} = this.props;

        if (error) {
            return <Error />
        }

        if (loading) {
            return <Spinner />
        }

        console.log(news);

        const items = news.map((item, i) => {
            return(
                <NewsItem
                    key={i}
                    title={item.title}
                    url={item.url}
                    urlToImage={item.urlToImage}/>
            )
        });

        return(
            <div className='news__list'>
                {items}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.newsList,
        loading: state.loading,
        error: state.error,
    }
}

const mapDispatchToProps = {
    newsLoaded,
    newsRequested,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsList));

