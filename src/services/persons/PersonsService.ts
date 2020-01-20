import {Person} from '../../interfaces/types'
import {AbstractLogger} from '../../core/logger/AbstractLogger'
import {Injectable} from 'injection-js'


@Injectable()
export class PersonsService {
  private personList: Person[] = [{_id: '1234', name: 'samplePerson1'}, {_id: '1244', name: 'samplePerson2'}]

  constructor(private logger: AbstractLogger) {
    // this.stripeService = new StripeService(logger)
  }

  public getPersons(personName?: string): Promise<Person[]> {
    this.logger.info('Returning all persons...')

    return new Promise((resolve) => {
      let filteredPersonsList
      if (personName) {
        filteredPersonsList = this.personList.filter((person) => person.name === personName)
        resolve(filteredPersonsList)
      } else {
        resolve(this.personList)
      }
    })
  }

  public updatePersonName(_id: string, newName: string): Promise<Person> {
    return new Promise((resolve) => {
      for (const person of this.personList) {
        if (person._id === _id) {
          person.name = newName
          resolve(person)

          return
        }
      }
      resolve({})
    })
  }
}
