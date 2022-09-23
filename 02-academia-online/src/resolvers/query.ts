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
        ? {
            id: "-1",
            name: `No se ha encontrado el estudiante con id: ${id}`,
            email: "Nada",
          }
        : resultado;
    },
    cursos(): any {
      return database.cursos;
    },
    curso(__: void, { id }): any {
      const resultado = database.cursos.filter((curso) => curso.id === id)[0];

      return resultado === undefined
        ? {
            id: "-1",
            title: `No se ha encontrado el curso con id: ${id}`,
            description: "",
            clases: -1,
            time: 0.0,
            logo: '',
            level: 'TODOS',
            path: '',
            teacher: '',
            reviews: []
          }
        : resultado;
    },
  },
};

export default query;
