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

      if (
        database.cursos.filter((itemCur) => itemCur.title === itemCurso.title)
          .length === 0
      ) {
        database.cursos.push(itemCurso);
        return itemCurso;
      } else {
        return {
          id: -1,
          title: `El curso ya existe con este titulo`,
          description: "",
          clases: -1,
          time: 0.0,
          logo: "",
          level: "TODOS",
          path: "",
          teacher: "",
          reviews: [],
        };
      }
    },
    modificarCurso(__: void, { curso }): any {
      const cursoExiste = _.findIndex(database.cursos, (cursoInDex) => {
        return cursoInDex.id === curso.id;
      });
      if (cursoExiste > -1) {
        const valoraciones = database.cursos[cursoExiste].reviews;
        curso.reviews = valoraciones;
        database.cursos[cursoExiste] = curso;
        return curso;
      } else {
        return {
          id: -1,
          title: `El curso NO existe en la base de datos`,
          description: "",
          clases: -1,
          time: 0.0,
          logo: "",
          level: "TODOS",
          path: "",
          teacher: "",
          reviews: [],
        };
      }
    },
    eliminarCurso(__: void, { id }): any {
      const borrarCurso = _.remove(database.cursos, (curso) => {
        return curso.id === id;
      });

      if (borrarCurso[0] === undefined) {
        return {
          id: -1,
          title: `El curso NO se puede borrar porque no existe`,
          description: "",
          clases: -1,
          time: 0.0,
          logo: "",
          level: "TODOS",
          path: "",
          teacher: "",
          reviews: [],
        };
      } 

      return borrarCurso[0]
    },
  },
};

export default mutation;
