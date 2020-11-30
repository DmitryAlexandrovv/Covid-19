const NewsAPI = require('newsapi');
const apiKey = '869434d743814b44b4dc8cd801f9c9ae';

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