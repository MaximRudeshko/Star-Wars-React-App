class SwapiService{

    _apiBase = 'https://swapi.dev/api'

    async getResources(url){
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${res}`)
        }
        return await res.json()
    }

    async getAllPeople(){
        const res =  await this.getResources('/people/');
        return res.results
    }

    getPerson(id){
        return this.getResources(`/people/${id}`)
    }

    async getAllStarships(){
        const res = await this.getResources('/starships/')
        return res.results
    }

    getStarship(id){
        return this.getResources(`/starships/${id}`)
    }

    async getAllPlanet(){
        const res = await this.getResources('/planets/')
        return res.results
    }

    getPlanet(id){
        return this.getResources(`/planets/${id}`)
    }
}
