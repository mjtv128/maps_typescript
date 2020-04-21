import {User} from './User'
import {Company} from './Company'

export class CustomMap {
    //1 single property tied to it
    //custommap to work with google map and access it and customise it
    //we want to hide the existence of googlemaps 
    // googleMap: //instance of google.maps.Map
    private googleMap: google.maps.Map
    
    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
        zoom: 1,
        center: {
            lat: 0,
            lng: 0
            }
        })
    }

    addUserMarker(user: User): void{
        new google.maps.Marker({
            map: this.googleMap, 
            position: {
                lat: user.location.lat,
                lng: user.location.lng
            }
        })
    }

    addCompanyMarker(company: Company): void{
        new google.maps.Marker({
            map: this.googleMap, 
            position: {
                lat: company.location.lat,
                lng: company.location.lng
            }
        })
    }
}