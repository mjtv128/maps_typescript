import {User} from './User'
import {Company} from './Company'
import { CustomMap } from './CustomMap'

const user = new User()
const customMap = new CustomMap('map')
const company = new Company()
customMap.addUserMarker(user)
customMap.addCompanyMarker(company);


