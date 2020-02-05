import { OwnVsRental } from '../schema/ownvsrental-model';
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
        allOwnVsRentals: (_, args) => {
            var startDate = (args.filter && args.filter.startDate) ? args.filter.startDate : "2019-01-01"
            var endDate = (args.filter && args.filter.endDate) ? args.filter.endDate : new Date()
            return new Promise((resolve, reject) => {
                OwnVsRental
                    .find({
                        $and: [
                            { createdAt: { $gt: startDate } },
                            { createdAt: { $lt: endDate } },
                        ]
                    })
                    .populate('commonData.datasetId')
                    .then((entries, err) => {
                        if (err) {
                            reject(err)
                        }
                        if (args.filter && args.filter.countryCode) {
                            entries = entries.filter(function (entry) {
                                return entry.commonData.datasetId.countryCode == args.filter.countryCode;
                            });
                        }
                        if (args.filter && args.filter.localRegion) {
                            entries = entries.filter(function (entry) {
                                return entry.commonData.datasetId.localRegion == args.filter.localRegion;
                            });
                        }
                        resolve(entries)
                    })
            })
        },
        _allOwnVsRentalsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                OwnVsRental.count().then((res, err) => {
                    if (err) {
                        reject(err)
                    }
                    resolve({ count: res })
                })
            })
        },
        _createdEachMonthOwnVsRentalsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    current: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month, 1), $lt: UtilService.startTime(year, month + 1, 1) } }).count(),
                    mon_1: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month - 1, 1), $lt: UtilService.startTime(year, month, 1) } }).count(),
                    mon_2: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month - 2, 1), $lt: UtilService.startTime(year, month - 1, 1) } }).count(),
                    mon_3: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month - 3, 1), $lt: UtilService.startTime(year, month - 2, 1) } }).count(),
                    mon_4: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month - 4, 1), $lt: UtilService.startTime(year, month - 3, 1) } }).count(),
                    mon_5: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month - 5, 1), $lt: UtilService.startTime(year, month - 4, 1) } }).count(),
                    mon_6: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month - 6, 1), $lt: UtilService.startTime(year, month - 5, 1) } }).count(),
                    mon_7: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month - 7, 1), $lt: UtilService.startTime(year, month - 6, 1) } }).count(),
                    mon_8: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month - 8, 1), $lt: UtilService.startTime(year, month - 7, 1) } }).count(),
                    mon_9: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month - 9, 1), $lt: UtilService.startTime(year, month - 8, 1) } }).count(),
                    mon_10: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month - 10, 1), $lt: UtilService.startTime(year, month - 9, 1) } }).count(),
                    last: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month - 11, 1), $lt: UtilService.startTime(year, month - 10, 1) } }).count(),
                })
            })
        },
        _createdEachWeekOwnVsRentalsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    week_1: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month, 1), $lt: UtilService.startTime(year, month, 7-day) } }).count(),
                    week_2: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month, 8-day), $lt: UtilService.startTime(year, month, 14-day) } }).count(),
                    week_3: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month, 15-day), $lt: UtilService.startTime(year, month, 21-day) } }).count(),
                    week_4: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month, 22-day), $lt: UtilService.startTime(year, month, 28-day) } }).count(),
                    week_5: OwnVsRental.find({ createdAt: { $gt: UtilService.startTime(year, month, 29-day), $lt: UtilService.startTime(year, month, 35-day) } }).count(),
                })
            })
        },
        _createdEachDayOwnVsRentalsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    day_1: OwnVsRental.find({
                        createdAt: {
                            $gt: UtilService.startTime(date.getFullYear(), date.getMonth(), date.getDate()),
                            $lt: UtilService.endTime(date.getFullYear(), date.getMonth(), date.getDate())
                        }
                    }).count(),
                    day_2: OwnVsRental.find({
                        createdAt: {
                            $gt: UtilService.startTime(date1.getFullYear(), date1.getMonth(), date1.getDate()),
                            $lt: UtilService.endTime(date1.getFullYear(), date1.getMonth(), date1.getDate())
                        }
                    }).count(),
                    day_3: OwnVsRental.find({
                        createdAt: {
                            $gt: UtilService.startTime(date2.getFullYear(), date2.getMonth(), date2.getDate()),
                            $lt: UtilService.endTime(date2.getFullYear(), date2.getMonth(), date2.getDate())
                        }
                    }).count(),
                    day_4: OwnVsRental.find({
                        createdAt: {
                            $gt: UtilService.startTime(date3.getFullYear(), date3.getMonth(), date3.getDate()),
                            $lt: UtilService.endTime(date3.getFullYear(), date3.getMonth(), date3.getDate())
                        }
                    }).count(),
                    day_5: OwnVsRental.find({
                        createdAt: {
                            $gt: UtilService.startTime(date4.getFullYear(), date4.getMonth(), date4.getDate()),
                            $lt: UtilService.endTime(date4.getFullYear(), date4.getMonth(), date4.getDate())
                        }
                    }).count(),
                    day_6: OwnVsRental.find({
                        createdAt: {
                            $gt: UtilService.startTime(date5.getFullYear(), date5.getMonth(), date5.getDate()),
                            $lt: UtilService.endTime(date5.getFullYear(), date5.getMonth(), date5.getDate())
                        }
                    }).count(),
                    day_7: OwnVsRental.find({
                        createdAt: {
                            $gt: UtilService.startTime(date6.getFullYear(), date6.getMonth(), date6.getDate()),
                            $lt: UtilService.endTime(date6.getFullYear(), date6.getMonth(), date6.getDate())
                        }
                    }).count(),
                })
            })
        },
    },
};
