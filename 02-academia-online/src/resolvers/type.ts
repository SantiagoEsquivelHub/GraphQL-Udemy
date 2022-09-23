import { IResolvers } from "@graphql-tools/utils";
import { database } from "../data/data.store";
import _ from "lodash";

const type: IResolvers = {
  Estudiante: {
    courses: (student) => {
      const courseList: Array<any> = [];
      student.courses?.map((curso: string) => {
        courseList.push(_.filter(database.cursos, ["id", curso])[0]);
      });
      return courseList;
    },
  },
  Curso: {
    students: (curso) => {
      const studentList: Array<any> = [];
      const idCurso = curso.id;
      database.estudiantes?.map((estudiante: any) => {
        return estudiante.courses.filter((id: any) => id === idCurso)[0] > 0
          ? studentList.push(estudiante)
          : studentList;
      });
      return studentList;
    },
    path: (curso) => `https://www.udemy.com${curso.path}`,
  },
};

export default type;
