import { UserActivity } from '../schema/useractivity-model';
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
        _allReportsMeta: (_, args) => {
            var startDate = (args.filter && args.filter.startDate) ? args.filter.startDate : "2016-01-01"
            var endDate = (args.filter && args.filter.endDate) ? args.filter.endDate : new Date()
            return new Promise((resolve, reject) => {
                UserActivity
                    .count({
                        $and: [
                            { createdAt: { $gt: startDate, $lt: endDate } },
                            (args.filter && args.filter.userId) ? { userId: args.filter.userId } : {},
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    })
                    .then((res, err) => {
                        if (err) {
                            reject(err)
                        }
                        resolve({ count: res })
                    })
            })
        },
        getUserActivity: (_, args) => {
            return UserActivity.findById(args.id).populate("DataSet");
        },
        _createdEachMonthReportsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    current: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month, 1),
                                    $lt: UtilService.startTime(year, month + 1, 1)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    mon_1: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month - 1, 1),
                                    $lt: UtilService.startTime(year, month, 1)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    mon_2: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month - 2, 1),
                                    $lt: UtilService.startTime(year, month - 1, 1)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    mon_3: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month - 3, 1),
                                    $lt: UtilService.startTime(year, month - 2, 1)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    mon_4: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month - 4, 1),
                                    $lt: UtilService.startTime(year, month - 3, 1)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    mon_5: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month - 5, 1),
                                    $lt: UtilService.startTime(year, month - 4, 1)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    mon_6: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month - 6, 1),
                                    $lt: UtilService.startTime(year, month - 5, 1)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    mon_7: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month - 7, 1),
                                    $lt: UtilService.startTime(year, month - 6, 1)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    mon_8: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month - 8, 1),
                                    $lt: UtilService.startTime(year, month - 7, 1)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    mon_9: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month - 9, 1),
                                    $lt: UtilService.startTime(year, month - 8, 1)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    mon_10: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month - 10, 1),
                                    $lt: UtilService.startTime(year, month - 9, 1)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    last: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month - 11, 1),
                                    $lt: UtilService.startTime(year, month - 10, 1)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                })
            })
        },
        _createdEachWeekReportsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    week_1: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month, 1),
                                    $lt: UtilService.startTime(year, month, 7 - day)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    week_2: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month, 8 - day),
                                    $lt: UtilService.startTime(year, month, 14 - day)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    week_3: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month, 15 - day),
                                    $lt: UtilService.startTime(year, month, 21 - day)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    week_4: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month, 22 - day),
                                    $lt: UtilService.startTime(year, month, 28 - day)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    week_5: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(year, month, 29 - day),
                                    $lt: UtilService.startTime(year, month, 35 - day)
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                })
            })
        },
        _createdEachDayReportsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    day_1: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(date.getFullYear(), date.getMonth(), date.getDate()),
                                    $lt: UtilService.endTime(date.getFullYear(), date.getMonth(), date.getDate())
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    day_2: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(date1.getFullYear(), date1.getMonth(), date1.getDate()),
                                    $lt: UtilService.endTime(date1.getFullYear(), date1.getMonth(), date1.getDate())
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    day_3: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(date2.getFullYear(), date2.getMonth(), date2.getDate()),
                                    $lt: UtilService.endTime(date2.getFullYear(), date2.getMonth(), date2.getDate())
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    day_4: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(date3.getFullYear(), date3.getMonth(), date3.getDate()),
                                    $lt: UtilService.endTime(date3.getFullYear(), date3.getMonth(), date3.getDate())
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    day_5: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(date4.getFullYear(), date4.getMonth(), date4.getDate()),
                                    $lt: UtilService.endTime(date4.getFullYear(), date4.getMonth(), date4.getDate())
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    day_6: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(date5.getFullYear(), date5.getMonth(), date5.getDate()),
                                    $lt: UtilService.endTime(date5.getFullYear(), date5.getMonth(), date5.getDate())
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                    day_7: UserActivity.count({
                        $and: [
                            {
                                createdAt: {
                                    $gt: UtilService.startTime(date6.getFullYear(), date6.getMonth(), date6.getDate()),
                                    $lt: UtilService.endTime(date6.getFullYear(), date6.getMonth(), date6.getDate())
                                }
                            },
                            (args.filter && args.filter.full) ? { activityTypeId: '5da4759d8363c3115007b04e' } : {},
                            (args.filter && args.filter.table_only) ? { activityTypeId: '5da4758a8363c3115007b04d' } : {},
                            (args.filter && args.filter.chart_only) ? { activityTypeId: '5da475808363c3115007b04c' } : {},
                        ]
                    }),
                })
            })
        },
    },
};
