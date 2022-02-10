import { IConfig } from 'config';

export class AppConfigService {
  private readonly config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }
  get<T>(configPath: string): T {
    return this.config.get<T>(configPath);
  }
}
