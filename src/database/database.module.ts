import { Global, Module, Provider } from '@nestjs/common';
import { Knex, knex } from 'knex';
import { DatabaseClient } from './database.client';
import { AppConfigService } from '../config/app.config.service';
import { ConfigModule } from '../config/config.module';

let instance: DatabaseClient;

const databaseClient: Provider<DatabaseClient> = {
  provide: DatabaseClient,
  useFactory: (appConfigService: AppConfigService) => {
    if (!instance) {
      const knexConfig = appConfigService.get<Knex.Config>('db');
      const knexInstance = knex(knexConfig);
      instance = new DatabaseClient(knexInstance);
    }
    return instance;
  },
  inject: [AppConfigService],
};

@Global()
@Module({
  imports: [ConfigModule],
  exports: [DatabaseClient],
  providers: [databaseClient],
})
export class DatabaseModule {}
