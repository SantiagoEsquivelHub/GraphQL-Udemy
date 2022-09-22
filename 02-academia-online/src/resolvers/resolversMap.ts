import { IResolvers } from "@graphql-tools/utils";
import query from "./query";
import typeEstudiante from "./type";

const resolversMap: IResolvers = {
  ...query,
  ...typeEstudiante,
};

export default resolversMap;
