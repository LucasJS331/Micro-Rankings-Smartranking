import { Module } from '@nestjs/common';
import { RankingsModule } from './rankings/rankings.module';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule,ConfigService } from '@nestjs/config'
import { ProxyRMQModule } from './proxyrmq/proxyrmq.module';

const config_service = new ConfigService();

@Module({
  imports: [
    RankingsModule,
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRoot(config_service.get("MONGO_URI"),
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }),
    ProxyRMQModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
