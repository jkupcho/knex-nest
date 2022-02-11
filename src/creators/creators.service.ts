import { Inject, Injectable } from '@nestjs/common';
import { DatabaseClient } from '../database/database.client';

@Injectable()
export class CreatorsService {
  constructor(private databaseClient: DatabaseClient) {}

  async findAll() {
    return this.databaseClient.getKnex().from('creators').limit(10).offset(0);
  }
}
