import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CommonModule } from './common/common.module';
import { EnvConfiguration } from './config/env.config';
import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
	ConfigModule.forRoot({
		load: [EnvConfiguration]
	}),

	ServeStaticModule.forRoot({
		rootPath: join(__dirname, '..', 'public')
	}),

	MongooseModule.forRoot(
		//'mongodb+srv://dextro:pngtjt88@mongo.zsnhb4l.mongodb.net/nestjs-pokemon?retryWrites=true&w=majority'
		process.env.MONGODB
	),

	PokemonModule,
	CommonModule,
	SeedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
