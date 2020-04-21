import faker from 'faker'

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        //initialisation 
        this.name = faker.name.firstName()
       //location does not get automatically intiailised into obj
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}