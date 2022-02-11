import { Module } from '@nestjs/common';
import { CreatorsModule } from './creators/creators.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, CreatorsModule],
})
export class AppModule {}
