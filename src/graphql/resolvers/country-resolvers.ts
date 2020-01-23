import { Country } from '../schema/country-model';

export default {
    Query: {
        getCountrys: (_, args) => {
            return Country.find({});
        },
        getCountry: (_, args) => {
            return Country.findById(args.id);
        }
    },
    Mutation: {
        addCountry: (_, args) => {
            return Country.create(args.input)
        },
        addCountrys: (_, args) => {
            return Country.insertMany(args.input)
        },
    }
};
