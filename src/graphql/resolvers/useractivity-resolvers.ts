import { UserActivity } from '../schema/useractivity-model';

export default {
    Query: {
        getUserActivitys: (_, args) => {
            return UserActivity.find({});
        },
    },
    Mutation: {
        addUserActivity: (_, args) => {
            return UserActivity.create(args)
        },
    }
};
