import { User } from '../schema/user-model';

export default {
    Query: {
        getUsers: (_, args) => {
            return User.find({});
        },
        getUser: (_, args) => {
            return User.findById(args.id);
        }
    },
    Mutation: {
        addUser: (_, args) => {
            return User.create(args)
        },
        updateUser: (_, args) => {
            if (!args.id) return;
            return User.findOneAndUpdate({ _id: args.id },
                {
                    $set: {
                        userName: args.userName,
                        email: args.email,
                    }
                }, { new: true },
            );
        },
        deleteUser: (_, args) => {
            return User.findOneAndDelete({ _id: args.id });
        },
    }
};
