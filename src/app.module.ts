import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule as EnvConfigModule } from '@nestjs/config';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    EnvConfigModule.forRoot({
      envFilePath: ['.env', '.jest.env'],
    }),
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
