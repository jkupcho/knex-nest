import { Module } from '@nestjs/common';
import { CreatorsModule } from './creators/creators.module';
import { DatabaseModule } from './database/database.module';
import { NodeConfigModule } from './config/node-config.module';

@Module({
  imports: [NodeConfigModule, DatabaseModule, CreatorsModule],
})
export class AppModule {}
