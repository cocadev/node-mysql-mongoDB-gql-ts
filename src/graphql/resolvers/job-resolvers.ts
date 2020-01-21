import { Job } from '../schema/job-model';

export default {
    Query: {
        getJobs: (_, args) => {
            return Job.find({});
        },
        getJob: (_, args) => {
            return Job.findById(args.id);
        }
    },
    Mutation: {
        addJob: (_, args) => {
            return Job.create(args)
        },
        updateJob: (_, args) => {
            if (!args.id) return;
            return Job.findOneAndUpdate({ _id: args.id },
                {
                    $set: {
                        name: args.name,
                        country: args.country,
                        budget: args.budget,
                        range: args.range,
                    }
                }, { new: true },
            );
        },
        deleteJob: (_, args) => {
            return Job.findOneAndDelete({ _id: args.id });
        },
    }
};
