import { Global, Module, Provider } from '@nestjs/common';
import * as config from 'config';

export const NODE_CONFIG_TOKEN = 'NODE_CONFIG_TOKEN';

const provider: Provider<config.IConfig> = {
  provide: NODE_CONFIG_TOKEN,
  useValue: config,
};

@Global()
@Module({
  providers: [provider],
  exports: [provider],
})
export class NodeConfigModule {}
