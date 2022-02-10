import { Global, Module } from '@nestjs/common';
import { AppConfigService } from './app.config.service';
import * as config from 'config';

let instance: AppConfigService;

@Global()
@Module({
  providers: [
    {
      provide: AppConfigService,
      useFactory: () => {
        if (!instance) {
          instance = new AppConfigService(config);
        }
        return instance;
      },
    },
  ],
  exports: [AppConfigService],
})
export class ConfigModule {}
