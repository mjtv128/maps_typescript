import faker from 'faker'
import {Mappable} from './CustomMap'

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red'

    constructor() {
        //initialisation 
        this.name = faker.name.firstName()
       //location does not get automatically intiailised into obj
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    markerContent(): string{
        return `User Name: ${this.name}`
    }
}