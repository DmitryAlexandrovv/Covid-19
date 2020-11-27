import React, {Component} from 'react';
import {connect} from 'react-redux';
import {WithNewsService} from '../../hoc';
import {newsLoaded, newsRequested, menuSubmitted} from '../../../actions';
import {withRouter} from 'react-router-dom';
import NewsList from '../../news-list';

class NewsPage extends Component{
    componentDidMount(){
        this.props.newsRequested();

        const {NewsService} = this.props;

        NewsService.getNews('covid')
            .then(res => {
                this.props.newsLoaded(res.articles);
            })
    }

    componentDidUpdate(){
        console.log(1);
    }

    render(){
        return(
            <div className='newsPage'>
                <NewsList />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = {
    newsLoaded,
    newsRequested,
    menuSubmitted,
}

export default withRouter(WithNewsService()(connect(mapStateToProps, mapDispatchToProps)(NewsPage)));