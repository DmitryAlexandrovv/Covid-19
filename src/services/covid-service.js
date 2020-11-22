export default class CovidService {
    _apiBase = 'https://api.covid19api.com';

    async getMenuItems() {
        const res = await this.getResource('/summary');
        const global = res.Global;
        global.Country = 'Global';
        global.Slug = 'global';
        return [global, ...res.Countries];
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${this._apiBase}${url}, status ${res.status}`);
        }

        return await res.json();
    }

    async getStatistics(slug){
        const res = await this.getResource('/dayone/country/south-africa');
        
        return res[res.length - 1];
    }
}