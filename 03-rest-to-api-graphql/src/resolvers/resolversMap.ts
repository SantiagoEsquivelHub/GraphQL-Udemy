import { IResolvers } from 'graphql-tools';
import mutation from './mutation';
import query from './query';
import typeSeason from './type';

export const LIST: string [] = [ ];
const resolvers : IResolvers = {
    ...query,
    ...typeSeason,
};

export default resolvers;