import {db} from '../../datasources/mysqlDB';
import {Op} from 'sequelize';
import UtilService from '../../datasources/utils';
import { UserActivity } from '../schema/useractivity-model';
import { DataSet } from '../schema/dataset-model';
import { VehicleSelecton } from '../schema/vehicleselecton-model';
import { OwnVsRental } from '../schema/ownvsrental-model';

const User = db.user;
const Company = db.company;

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
        _allUsers: (_, args) => {
            return new Promise((resolve, reject) => {
                User
                .findAll({
                    attributes: ['id', 'full_name'],
                    include: {
                        model: Company,
                        where: { id: db.Sequelize.col('ur_users.company_id') },
                        attributes: ['name', 'id']
                    }
                })
                .then(async (entries, err) => {
                    const result = await Promise.all(entries.map(async (entry, index):Promise<any>=>{
                        entry.company = entry.ur_company.name
                        entry.numberOfDatasets = DataSet.where({ userId: entry.id }).count({})
                        entry.numberOfVehicleComparisonRecords = VehicleSelecton.where({ "common.userId": entry.id }).count({})
                        entry.numberOfOwnVsRentRecords = OwnVsRental.where({ "commonData.userId": entry.id }).count({})
                        const firstActivityDate = await UserActivity.where({ "userId": entry.id }).sort({ updatedAt: 1 }).limit(1);
                        const lastActivityDate = await UserActivity.where({ "userId": entry.id }).sort({ updatedAt: -1 }).limit(1);

                        entry.firstActivityDate = firstActivityDate[0] && firstActivityDate[0].updatedAt;
                        entry.lastActivityDate = lastActivityDate[0] && lastActivityDate[0].updatedAt;

                        return entry;
                    }));
                    resolve(result)
                })
            })
        },
        _allUsersMeta: (_, args) => {
            var startDate = (args.filter && args.filter.startDate) ? args.filter.startDate : "2016-01-01"
            return new Promise((resolve, reject) => {
                User
                .findAndCountAll({
                    where: {
                        created_at: {
                            [Op.gte]:startDate
                        },
                        company_id: args.filter.companyId
                    }
                })
                .then((res, err) => {
                    if (err) {
                        reject(err)
                    }
                    resolve({ count: res.count })
                })
            })
        },
        _createdEachMonthReportsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    current: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month, 1),
                                [Op.lte]:UtilService.endTime(year, month+1, 1)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    mon_1: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-1, 1),
                                [Op.lte]:UtilService.endTime(year, month, 1)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    mon_2: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-2, 1),
                                [Op.lte]:UtilService.endTime(year, month-1, 1)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    mon_3: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-3, 1),
                                [Op.lte]:UtilService.endTime(year, month-2, 1)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    mon_4: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-4, 1),
                                [Op.lte]:UtilService.endTime(year, month-3, 1)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    mon_5: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-5, 1),
                                [Op.lte]:UtilService.endTime(year, month-4, 1)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    mon_6: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-6, 1),
                                [Op.lte]:UtilService.endTime(year, month-5, 1)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    mon_7: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-7, 1),
                                [Op.lte]:UtilService.endTime(year, month-6, 1)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    mon_8: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-8, 1),
                                [Op.lte]:UtilService.endTime(year, month-7, 1)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    mon_9: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-9, 1),
                                [Op.lte]:UtilService.endTime(year, month-8, 1)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    mon_10: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-10, 1),
                                [Op.lte]:UtilService.endTime(year, month-9, 1)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    last: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month-11, 1),
                                [Op.lte]:UtilService.endTime(year, month-10, 1)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                })
            })
        },
        _createdEachWeekUsersMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    week_1: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month, 1),
                                [Op.lte]:UtilService.endTime(year, month, 7 - day)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    week_2: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month, 8 - day),
                                [Op.lte]:UtilService.endTime(year, month, 14 - day)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    week_3: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month, 15 - day),
                                [Op.lte]:UtilService.endTime(year, month, 21 - day)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    week_4: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month, 22 - day),
                                [Op.lte]:UtilService.endTime(year, month, 28 - day)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    week_5: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(year, month, 29 - day),
                                [Op.lte]:UtilService.endTime(year, month, 35 - day)
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                })
            })
        },
        _createdEachDayUsersMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    day_1: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(date.getFullYear(), date.getMonth(), date.getDate()),
                                [Op.lte]:UtilService.endTime(date.getFullYear(), date.getMonth(), date.getDate())
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    day_2: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(date1.getFullYear(), date1.getMonth(), date1.getDate()),
                                [Op.lte]:UtilService.endTime(date1.getFullYear(), date1.getMonth(), date1.getDate())
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    day_3: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(date2.getFullYear(), date2.getMonth(), date2.getDate()),
                                [Op.lte]:UtilService.endTime(date2.getFullYear(), date2.getMonth(), date2.getDate())
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    day_4: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(date3.getFullYear(), date3.getMonth(), date3.getDate()),
                                [Op.lte]:UtilService.endTime(date3.getFullYear(), date3.getMonth(), date3.getDate())
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    day_5: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(date4.getFullYear(), date4.getMonth(), date4.getDate()),
                                [Op.lte]:UtilService.endTime(date4.getFullYear(), date4.getMonth(), date4.getDate())
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    day_6: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(date5.getFullYear(), date5.getMonth(), date5.getDate()),
                                [Op.lte]:UtilService.endTime(date5.getFullYear(), date5.getMonth(), date5.getDate())
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                    day_7: User.findAndCountAll({
                        where: {
                            created_at: {
                                [Op.gte]:UtilService.startTime(date6.getFullYear(), date6.getMonth(), date6.getDate()),
                                [Op.lte]:UtilService.endTime(date6.getFullYear(), date6.getMonth(), date6.getDate())
                            },
                            company_id: args.filter.companyId
                        }
                    }),
                })
            })
        },
        _activeUsersThisMonthMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                UserActivity
                .find({
                    where: {
                        created_at: {
                            [Op.gte]:UtilService.startTime(year, month, 1),
                            [Op.lte]:UtilService.startTime(year, month+1, 1)
                        },
                        company_id: args.filter.companyId
                    }
                })
                .then((res, err) => {
                    if (err) {
                        reject(err)
                    }
                    resolve({ count: res.count })
                })
            })
        },
    },
};
