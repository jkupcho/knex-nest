import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from './database.module';
import { DatabaseClient } from './database.client';

describe('DatabaseModule', () => {
  let databaseClient: DatabaseClient;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [DatabaseClient],
    }).compile();

    databaseClient = app.get<DatabaseClient>(DatabaseClient);
  });

  describe('root', () => {
    it('should return a DatabaseClient', () => {
      expect(databaseClient).toBeDefined();
    });
  });
});
