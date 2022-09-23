import { IResolvers } from "@graphql-tools/utils";
import { database } from "../data/data.store";
import _ from "lodash";

const mutation: IResolvers = {
  Mutation: {
    crearCurso(__: void, { curso }): any {
      const itemCurso = {
        id: String(database.cursos.length + 1),
        title: curso.title,
        description: curso.description,
        clases: curso.clases,
        time: curso.time,
        logo: curso.logo,
        level: curso.level,
        path: curso.path,
        teacher: curso.teacher,
        reviews: [],
      };

      if (database.cursos.filter((itemCur) => itemCur.title === itemCurso.title).length === 0) {
        database.cursos.push(itemCurso);
        return itemCurso;
      } else {
        return {
          id: -1,
          title: `El curso ya existe con este titulo`,
          description: '',
          clases: -1,
          time: 0.0,
          logo: '',
          level: 'TODOS',
          path: '',
          teacher: '',
          reviews: [],
        };
      }
    },
  },
};

export default mutation;
