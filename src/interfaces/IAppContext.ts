import {PersonsService} from '../services/persons/PersonsService'

export interface IAppContext {
    personsService: PersonsService,
}
