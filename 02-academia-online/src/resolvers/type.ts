import { IResolvers } from "@graphql-tools/utils";
import { database } from "../data/data.store";
import _ from "lodash";

const type: IResolvers = {
  Estudiante: {
    courses: (student) => {
      const courseList: Array<any> = [];
      student.courses?.map((curso: string) => {
        courseList.push(_.filter(database.cursos, ['id', curso])[0]);
      });
      return courseList;
    },
  },
};

export default type;
