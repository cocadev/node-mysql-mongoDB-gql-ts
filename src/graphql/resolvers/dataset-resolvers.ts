import { DataSet } from '../schema/dataset-model';

export default {
    Query: {
        getDataSets: (_, args) => {
            return DataSet.find({});
        },
    },
    Mutation: {
        addDataSet: (_, args) => {
            return DataSet.create(args)
        },
    }
};
