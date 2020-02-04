import { VehicleSelecton } from '../schema/vehicleselecton-model';

export default {
    Query: {
        _allVehicleSelectonsMeta: (_, args) => {
            return new Promise((resolve, reject) => {
                VehicleSelecton.count().then((res, err) => {
                    if (err) {
                        reject(err)
                    }
                    resolve({ count: res })
                })
            })
        },
    },
};
