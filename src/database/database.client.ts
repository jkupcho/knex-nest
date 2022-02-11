import { knex, Knex } from 'knex';
import { IConfig } from 'config';
import { Inject } from '@nestjs/common';
import { NODE_CONFIG_TOKEN } from '../config/node-config.module';

export class DatabaseClient {
  private readonly knexInstance: Knex;

  constructor(@Inject(NODE_CONFIG_TOKEN) config: IConfig) {
    const knexConfig = config.get<Knex.Config>('db');
    this.knexInstance = knex(knexConfig);
  }

  getKnex(): Knex {
    return this.knexInstance;
  }
}
