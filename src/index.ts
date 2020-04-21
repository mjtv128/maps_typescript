// import {User} from './User'
// import {Company} from './Company'

// const user = new User()
// const company = new Company()

// console.log(company)
// console.log(user)

//create html element mapdiv to house the google map

//create an instance of map class
new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
})