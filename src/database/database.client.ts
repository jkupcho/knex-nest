import { Knex } from 'knex';

export class DatabaseClient {
  private readonly knexInstance: Knex;

  constructor(knexInstance: Knex) {
    this.knexInstance = knexInstance;
  }

  getQueryBuilderForTable(tableName: string): Knex.QueryBuilder {
    return this.knexInstance(tableName);
  }
}
