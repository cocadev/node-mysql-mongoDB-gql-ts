import { OwnVsRental } from '../schema/ownvsrental-model';

export default {
    Query: {
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
    },
};
