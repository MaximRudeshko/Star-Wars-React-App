export default class SwapiService{

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
        return res.results.map(item => this.transformPlanet(item))
    }

    async getPlanet(id){
        const planet =  await this.getResources(`/planets/${id}`)
        return this.transformPlanet(planet)
    }

    extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1]
    }

    transformPlanet(planet){
        return{
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    transformStarship(starship){
        return{

        }
    }

    transformPerson(){
        return{

        }
    }
}
