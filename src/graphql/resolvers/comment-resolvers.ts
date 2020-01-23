import { Comment } from '../schema/comment-model';

export default {
    Query: {
        getComments: (_, args) => {
            return Comment.find({});
        },
    },
    Mutation: {
        addComment: (_, args) => {
            return Comment.create(args)
        },
    }
};
