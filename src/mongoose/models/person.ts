import {Document, Schema, Model, model} from 'mongoose'
import {Person} from '../interfaces/person'

export interface PersonnModel extends Person, Document {}

export var PersonSchema = new Schema(
  {
    firstname: {type: String, required: true},
    lastname: {type: String, required: true}
  },
)
