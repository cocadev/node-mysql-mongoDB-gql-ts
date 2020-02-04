const mongoose = require('mongoose');
import { DataSet } from '../schema/dataset-model';
import UtilService from '../../datasources/utils';

var year = new Date().getFullYear();
var month = new Date().getMonth();
var day = new Date(year, month, 1).getDay();
var date = new Date();
var date1 = new Date();
var date2 = new Date();
var date3 = new Date();
var date4 = new Date();
var date5 = new Date();
var date6 = new Date();

date1.setDate(date.getDate() - 1);
date2.setDate(date.getDate() - 2);
date3.setDate(date.getDate() - 3);
date4.setDate(date.getDate() - 4);
date5.setDate(date.getDate() - 5);
date6.setDate(date.getDate() - 6);

export default {
    Query: {
        allDataSets: (_, args) => {
            return new Promise((resolve, reject) => {
                DataSet.find({
                    name: { '$regex': new RegExp(args.filter) },
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
                    resolve({ count: res })
                })
            })
        },
        _createdEachMonthDataSetsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    current: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month, 1), $lt: UtilService.startTime(year, month + 1, 1) } }).count(),
                    mon_1: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month - 1, 1), $lt: UtilService.startTime(year, month, 1) } }).count(),
                    mon_2: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month - 2, 1), $lt: UtilService.startTime(year, month - 1, 1) } }).count(),
                    mon_3: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month - 3, 1), $lt: UtilService.startTime(year, month - 2, 1) } }).count(),
                    mon_4: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month - 4, 1), $lt: UtilService.startTime(year, month - 3, 1) } }).count(),
                    mon_5: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month - 5, 1), $lt: UtilService.startTime(year, month - 4, 1) } }).count(),
                    mon_6: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month - 6, 1), $lt: UtilService.startTime(year, month - 5, 1) } }).count(),
                    mon_7: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month - 7, 1), $lt: UtilService.startTime(year, month - 6, 1) } }).count(),
                    mon_8: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month - 8, 1), $lt: UtilService.startTime(year, month - 7, 1) } }).count(),
                    mon_9: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month - 9, 1), $lt: UtilService.startTime(year, month - 8, 1) } }).count(),
                    mon_10: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month - 10, 1), $lt: UtilService.startTime(year, month - 9, 1) } }).count(),
                    last: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month - 11, 1), $lt: UtilService.startTime(year, month - 10, 1) } }).count(),
                })
            })
        },
        _createdEachWeekDataSetsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    week_1: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month, 1), $lt: UtilService.startTime(year, month, 7-day) } }).count(),
                    week_2: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month, 8-day), $lt: UtilService.startTime(year, month, 14-day) } }).count(),
                    week_3: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month, 15-day), $lt: UtilService.startTime(year, month, 21-day) } }).count(),
                    week_4: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month, 22-day), $lt: UtilService.startTime(year, month, 28-day) } }).count(),
                    week_5: DataSet.find({ createdAt: { $gt: UtilService.startTime(year, month, 29-day), $lt: UtilService.startTime(year, month, 35-day) } }).count(),
                })
            })
        },
        _createdEachDayDataSetsMeta: (_, args) => {

            return new Promise((resolve, reject) => {
                resolve({
                    day_1: DataSet.find({
                        createdAt: {
                            $gt: UtilService.startTime(date.getFullYear(), date.getMonth(), date.getDate()),
                            $lt: UtilService.endTime(date.getFullYear(), date.getMonth(), date.getDate())
                        }
                    }).count(),
                    day_2: DataSet.find({
                        createdAt: {
                            $gt: UtilService.startTime(date1.getFullYear(), date1.getMonth(), date1.getDate()),
                            $lt: UtilService.endTime(date1.getFullYear(), date1.getMonth(), date1.getDate())
                        }
                    }).count(),
                    day_3: DataSet.find({
                        createdAt: {
                            $gt: UtilService.startTime(date2.getFullYear(), date2.getMonth(), date2.getDate()),
                            $lt: UtilService.endTime(date2.getFullYear(), date2.getMonth(), date2.getDate())
                        }
                    }).count(),
                    day_4: DataSet.find({
                        createdAt: {
                            $gt: UtilService.startTime(date3.getFullYear(), date3.getMonth(), date3.getDate()),
                            $lt: UtilService.endTime(date3.getFullYear(), date3.getMonth(), date3.getDate())
                        }
                    }).count(),
                    day_5: DataSet.find({
                        createdAt: {
                            $gt: UtilService.startTime(date4.getFullYear(), date4.getMonth(), date4.getDate()),
                            $lt: UtilService.endTime(date4.getFullYear(), date4.getMonth(), date4.getDate())
                        }
                    }).count(),
                    day_6: DataSet.find({
                        createdAt: {
                            $gt: UtilService.startTime(date5.getFullYear(), date5.getMonth(), date5.getDate()),
                            $lt: UtilService.endTime(date5.getFullYear(), date5.getMonth(), date5.getDate())
                        }
                    }).count(),
                    day_7: DataSet.find({
                        createdAt: {
                            $gt: UtilService.startTime(date6.getFullYear(), date6.getMonth(), date6.getDate()),
                            $lt: UtilService.endTime(date6.getFullYear(), date6.getMonth(), date6.getDate())
                        }
                    }).count(),
                })
            })
        },
        _updatedEachMonthDataSetsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    current: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month, 1), $lt: UtilService.startTime(year, month + 1, 1) } }).count(),
                    mon_1: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month - 1, 1), $lt: UtilService.startTime(year, month, 1) } }).count(),
                    mon_2: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month - 2, 1), $lt: UtilService.startTime(year, month - 1, 1) } }).count(),
                    mon_3: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month - 3, 1), $lt: UtilService.startTime(year, month - 2, 1) } }).count(),
                    mon_4: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month - 4, 1), $lt: UtilService.startTime(year, month - 3, 1) } }).count(),
                    mon_5: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month - 5, 1), $lt: UtilService.startTime(year, month - 4, 1) } }).count(),
                    mon_6: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month - 6, 1), $lt: UtilService.startTime(year, month - 5, 1) } }).count(),
                    mon_7: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month - 7, 1), $lt: UtilService.startTime(year, month - 6, 1) } }).count(),
                    mon_8: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month - 8, 1), $lt: UtilService.startTime(year, month - 7, 1) } }).count(),
                    mon_9: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month - 9, 1), $lt: UtilService.startTime(year, month - 8, 1) } }).count(),
                    mon_10: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month - 10, 1), $lt: UtilService.startTime(year, month - 9, 1) } }).count(),
                    last: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month - 11, 1), $lt: UtilService.startTime(year, month - 10, 1) } }).count(),
                })
            })
        },
        _updatedEachWeekDataSetsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    week_1: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month, 1), $lt: UtilService.startTime(year, month, 7-day) } }).count(),
                    week_2: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month, 8-day), $lt: UtilService.startTime(year, month, 14-day) } }).count(),
                    week_3: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month, 15-day), $lt: UtilService.startTime(year, month, 21-day) } }).count(),
                    week_4: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month, 22-day), $lt: UtilService.startTime(year, month, 28-day) } }).count(),
                    week_5: DataSet.find({ updatedAt: { $gt: UtilService.startTime(year, month, 29-day), $lt: UtilService.startTime(year, month, 35-day) } }).count(),
                })
            })
        },
        _updatedEachDayDataSetsMeta: (_, args) => {

            return new Promise((resolve, reject) => {
                resolve({
                    day_1: DataSet.find({
                        updatedAt: {
                            $gt: UtilService.startTime(date.getFullYear(), date.getMonth(), date.getDate()),
                            $lt: UtilService.endTime(date.getFullYear(), date.getMonth(), date.getDate())
                        }
                    }).count(),
                    day_2: DataSet.find({
                        updatedAt: {
                            $gt: UtilService.startTime(date1.getFullYear(), date1.getMonth(), date1.getDate()),
                            $lt: UtilService.endTime(date1.getFullYear(), date1.getMonth(), date1.getDate())
                        }
                    }).count(),
                    day_3: DataSet.find({
                        updatedAt: {
                            $gt: UtilService.startTime(date2.getFullYear(), date2.getMonth(), date2.getDate()),
                            $lt: UtilService.endTime(date2.getFullYear(), date2.getMonth(), date2.getDate())
                        }
                    }).count(),
                    day_4: DataSet.find({
                        updatedAt: {
                            $gt: UtilService.startTime(date3.getFullYear(), date3.getMonth(), date3.getDate()),
                            $lt: UtilService.endTime(date3.getFullYear(), date3.getMonth(), date3.getDate())
                        }
                    }).count(),
                    day_5: DataSet.find({
                        updatedAt: {
                            $gt: UtilService.startTime(date4.getFullYear(), date4.getMonth(), date4.getDate()),
                            $lt: UtilService.endTime(date4.getFullYear(), date4.getMonth(), date4.getDate())
                        }
                    }).count(),
                    day_6: DataSet.find({
                        updatedAt: {
                            $gt: UtilService.startTime(date5.getFullYear(), date5.getMonth(), date5.getDate()),
                            $lt: UtilService.endTime(date5.getFullYear(), date5.getMonth(), date5.getDate())
                        }
                    }).count(),
                    day_7: DataSet.find({
                        updatedAt: {
                            $gt: UtilService.startTime(date6.getFullYear(), date6.getMonth(), date6.getDate()),
                            $lt: UtilService.endTime(date6.getFullYear(), date6.getMonth(), date6.getDate())
                        }
                    }).count(),
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
