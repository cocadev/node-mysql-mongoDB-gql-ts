const schema = `
type Person {
 _id : String
 name: String
}

# the schema allows the following query:
type Query {
  person(name: String): [Person]
}

type Mutation {
  updatePersonName(_id: String!, newName: String!): Person
}

`

export default schema
