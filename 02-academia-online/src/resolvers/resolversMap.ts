import { IResolvers } from "@graphql-tools/utils";
import mutation from "./mutation";
import query from "./query";
import typeEstudiante from "./type";

const resolversMap: IResolvers = {
  ...query,
  ...typeEstudiante,
  ...mutation,
};

export default resolversMap;
