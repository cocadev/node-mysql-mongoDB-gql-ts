const mongoose = require('mongoose');
import { DataSet } from '../schema/dataset-model';
import UtilService from '../../datasources/utils';

var year = new Date().getFullYear();
var month = new Date().getMonth();
var day = new Date(year, month, 1).getDay();
var today = new Date().getDate();

export default {
    Query: {
        allDataSets: (_, args) => {
            return new Promise((resolve, reject) => {
                DataSet.find({ 
                    name: { '$regex': new RegExp(args.filter)},
                }).then((res, err) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(res)
                })
            })
        },
        _allDataSetsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                DataSet.count().then((res, err) => {
                    if (err) {
                        reject(err)
                    }
                    resolve({count: res})
                })
            })
        },
        _createdEachMonthDataSetsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    current: DataSet.find({ createdAt: { $gt: new Date(year, month, 1), $lt: new Date(year, month + 1, 1)} }).count(),
                    mon_1: DataSet.find({ createdAt: { $gt: new Date(year, month-1, 1), $lt: new Date(year, month, 1) } }).count(),
                    mon_2: DataSet.find({ createdAt: { $gt: new Date(year, month-2, 1), $lt: new Date(year, month - 1, 1) } }).count(),
                    mon_3: DataSet.find({ createdAt: { $gt: new Date(year, month-3, 1), $lt: new Date(year, month - 2, 1) } }).count(),
                    mon_4: DataSet.find({ createdAt: { $gt: new Date(year, month-4, 1), $lt: new Date(year, month - 3, 1) } }).count(),
                    mon_5: DataSet.find({ createdAt: { $gt: new Date(year, month-5, 1), $lt: new Date(year, month - 4, 1) } }).count(),
                    mon_6: DataSet.find({ createdAt: { $gt: new Date(year, month-6, 1), $lt: new Date(year, month - 5, 1) } }).count(),
                    mon_7: DataSet.find({ createdAt: { $gt: new Date(year, month-7, 1), $lt: new Date(year, month - 6, 1) } }).count(),
                    mon_8: DataSet.find({ createdAt: { $gt: new Date(year, month-8, 1), $lt: new Date(year, month - 7, 1) } }).count(),
                    mon_9: DataSet.find({ createdAt: { $gt: new Date(year, month-9, 1), $lt: new Date(year, month - 8, 1) } }).count(),
                    mon_10: DataSet.find({ createdAt: { $gt: new Date(year, month-10, 1), $lt: new Date(year, month - 9, 1) } }).count(),
                    last: DataSet.find({ createdAt: { $gt: new Date(year, month-11, 1), $lt: new Date(year, month - 10, 1) } }).count(),
                })
            })
        },
        _createdEachWeekDataSetsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    week_1: DataSet.find({ createdAt: { $gt: new Date(year, month, 1), $lt: new Date(year, month, 7-day)} }).count(),
                    week_2: DataSet.find({ createdAt: { $gt: new Date(year, month, 8-day), $lt: new Date(year, month, 14-day) } }).count(),
                    week_3: DataSet.find({ createdAt: { $gt: new Date(year, month, 15-day), $lt: new Date(year, month, 21-day) } }).count(),
                    week_4: DataSet.find({ createdAt: { $gt: new Date(year, month, 22-day), $lt: new Date(year, month, 28-day) } }).count(),
                    week_5: DataSet.find({ createdAt: { $gt: new Date(year, month, 29-day), $lt: new Date(year, month, 35-day) } }).count(),
                })
            })
        },
        _createdEachDayDataSetsMeta: (_, args) => {
            console.log('******************* 18 ********************', UtilService.startTime(year, month, today))
            console.log('******************** 19 *******************', UtilService.endTime(year, month, today-12))

            var year = new Date().getFullYear();
            var month = new Date().getMonth();
            var day = new Date(year, month, 1).getDay();
            var today = new Date().getDate();

            return new Promise((resolve, reject) => {
                resolve({
                    day_1: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month, today), $lt: UtilService.endTime(year, month, today)} }).count(),
                    day_2: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month, today), $lt: UtilService.endTime(year, month, today)} }).count(),
                    day_3: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month, today), $lt: UtilService.endTime(year, month, today)} }).count(),
                    day_4: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month, today), $lt: UtilService.endTime(year, month, today)} }).count(),
                    day_5: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month, today), $lt: UtilService.endTime(year, month, today)} }).count(),
                    day_6: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month, today), $lt: UtilService.endTime(year, month, today)} }).count(),
                    day_7: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month, today), $lt: UtilService.endTime(year, month, today)} }).count(),
                })
            })
        },
        dataSetById: (_, args) => {
            return new Promise((resolve, reject) => {
                if (mongoose.Types.ObjectId.isValid(args.id)) {
                    DataSet.findById(args.id).then((res, err) => {
                        if (err) {
                            reject(err)
                        }
                        resolve(res)
                    })
                } else {
                    reject("Please provide correct id");
                }
            })
        },
        dataSetByName: (_, args) => {
            return new Promise((resolve, reject) => {
                DataSet.where({ name: args.name }).findOne({}).then((res, err) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(res)
                })
            })
        },
    },
    Mutation: {
        addDataSet: (_, args) => {
            return DataSet.create(args)
        },
    }
};
