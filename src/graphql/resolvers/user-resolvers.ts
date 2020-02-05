import {db} from '../../datasources/mysqlDB';
const User = db.user;

export default {
    Query: {
        _allUsersMeta: (_, args) => {               
            return new Promise((resolve, reject) => {
                User.count().then((res, err) => {
                    if (err) {
                        reject(err)
                    }
                    resolve({ count: res })
                })
            })
        },
    },
};
