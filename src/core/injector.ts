import 'zone.js'
import 'reflect-metadata'
import {Server} from '../../server'
import {AbstractLogger} from './logger/AbstractLogger'
import {AbstractSetting} from './config/AbstractSetting'
import {Setting} from './config/Setting'
import {Logger} from './logger/Logger'
import {CarsService} from '../services/cars/CarsService'

import {Injector, ReflectiveInjector} from 'injection-js'

const injector: Injector = ReflectiveInjector.resolveAndCreate([
  {provide: AbstractLogger, useClass: Logger},
  {provide: AbstractSetting, useClass: Setting},
  CarsService,
  Server
])

export default injector
