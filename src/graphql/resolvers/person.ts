import {QueryPersonArgs, Person, MutationUpdatePersonNameArgs} from '../../interfaces/types'
import {PersonsService} from '../../services/persons/PersonsService'
import {IAppContext} from '../../interfaces/IAppContext'

const resolveFunctions = {
  Query: {
    person(_, args: QueryPersonArgs, context: IAppContext): Promise<Person[]> {
      const personsService: PersonsService = context.personsService
      console.log('Resover for persons')

      return personsService.getPersons(args.name)
    },
  },

  Mutation: {
    updatePersonName(_, args: MutationUpdatePersonNameArgs, context: IAppContext): Promise<Person> {
      const personsService: PersonsService = context.personsService

      return personsService.updatePersonName(args._id, args.newName)
    }
  }
}

export default resolveFunctions
