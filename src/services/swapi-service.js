export default class SwapiService{

    _apiBase = 'https://swapi.dev/api'
    _imageBase = 'https://starwars-visualguide.com/assets/img/'

    getResources = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${res.status}`)
        }
        return await res.json()
    }

    getAllPeople = async () =>{
        const res =  await this.getResources('/people/');
        return res.results.map(item => this.transformPerson(item))
    }

    getPerson = async (id) => {
        const person = await this.getResources(`/people/${id}`)
        return this.transformPerson(person)
    }

    getPersonImage = ({id}) => {
        return `${this._imageBase}/characters/${id}.jpg`
    }

    getAllStarships = async () => {
        const res = await this.getResources('/starships/')
        return res.results
    }

    getStarship = async (id) => {
        const starship = await this.getResources(`/starships/${id}`)
        return this.transformStarship(starship)
    }

    getStarshipImage = ({id}) => {
        return (`${this._imageBase}/starships/${id}.jpg`)
    }

    getAllPlanet = async () => {
        const res = await this.getResources('/planets/')
        return res.results.map(item => this.transformPlanet(item))
    }

    getPlanet = async (id) => {
        const planet =  await this.getResources(`/planets/${id}`)
        return this.transformPlanet(planet)
    }

    extractId =(item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1]
    }

    transformPlanet = (planet) => {
        return{
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    transformStarship = (starship) => {
        return{
            id: this.extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }

    transformPerson = (person) => {
        return{
            id: this.extractId(person),
            name:person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color

        }
    }
}
