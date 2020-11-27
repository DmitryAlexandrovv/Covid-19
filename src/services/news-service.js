const NewsAPI = require('newsapi');
const apiKey = 'c86a3d3c542a4b9fb7ad25c3644df3cb';

export default class NewsService{
    constructor(){
        this.newsapi = new NewsAPI(apiKey, { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' });
    }

    async getNews(qTitle){
        return this.newsapi.v2.topHeadlines({
            q: qTitle,
            language: 'en',
        })
    }
}