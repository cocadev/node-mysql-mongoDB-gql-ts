import { UserActivity } from '../schema/useractivity-model';

export default {
    Query: {
        getUserActivitys: (_, args) => {
            return UserActivity.find({});
        },
        getUserActivity: (_, args) => {
            return UserActivity.findById(args.id).populate("DataSet");
        }
    },
    Mutation: {
        addUserActivity: (_, args) => {
            return UserActivity.create(args)
        },
    }
};
