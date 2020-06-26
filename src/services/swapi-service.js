export default class SwapiService{
    async getResources(url){
        const res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could not fetch ${res}`)
        }
        return await res.json()
    }

    getAllPeople(){
        return this.getResources('http swapi.dev/api/people/')
    }
}

const people = new SwapiService();
people.getAllPeople()