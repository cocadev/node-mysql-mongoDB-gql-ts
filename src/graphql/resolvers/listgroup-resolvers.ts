import { ListGroup } from '../schema/listgroup-model';

export default {
    Query: {
        getListGroups: (_, args) => {
            return ListGroup.find({});
        },
        getListGroup: (_, args) => {
            return ListGroup.findById(args.id);
        }
    },
    Mutation: {
        addListGroup: (_, args) => {
            return ListGroup.create(args)
        },
    }
};
