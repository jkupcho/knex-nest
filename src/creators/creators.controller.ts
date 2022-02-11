import { Controller, Get } from '@nestjs/common';
import { CreatorsService } from './creators.service';

@Controller('creators')
export class CreatorsController {
  constructor(private readonly creatorsService: CreatorsService) {}

  @Get()
  async getCreators() {
    return this.creatorsService.findAll();
  }
}
