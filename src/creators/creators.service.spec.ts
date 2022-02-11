import { Test, TestingModule } from '@nestjs/testing';
import { CreatorsService } from './creators.service';
import { DatabaseModule } from '../database/database.module';

describe('CreatorsService', () => {
  let service: CreatorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatorsService],
      imports: [DatabaseModule],
    }).compile();

    service = module.get<CreatorsService>(CreatorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
