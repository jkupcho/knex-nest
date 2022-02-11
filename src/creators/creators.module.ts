import { Module } from '@nestjs/common';
import { CreatorsController } from './creators.controller';
import { CreatorsService } from './creators.service';

@Module({
  controllers: [CreatorsController],
  providers: [CreatorsService],
})
export class CreatorsModule {}
