import { IResolvers } from "@graphql-tools/utils";
import { database } from "../data/data.store";

const query: IResolvers = {
  Query: {
    estudiantes(): any {
      return database.estudiantes;
    },
    estudiante(__: void, { id }): any {
      const resultado = database.estudiantes.filter(
        (estudiante) => estudiante.id === id
      )[0];

      return resultado === undefined
        ? { id: "-1", name: "No se ha encontrado", email: "Nada" }
        : resultado;
    },
  },
};

export default query;
