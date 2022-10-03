import { RESTDataSource } from 'apollo-datasource-rest';

export class F1 extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://https://ergast.com/api/f1/';
  }
}
