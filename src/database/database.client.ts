import { knex, Knex } from 'knex';
import * as config from 'config';

export class DatabaseClient {
  private readonly knexInstance: Knex;

  constructor() {
    const knexConfig = config.get<Knex.Config>('db');
    this.knexInstance = knex(knexConfig);
  }

  getKnex(): Knex {
    return this.knexInstance;
  }
}
