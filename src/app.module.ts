import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CommonModule } from './common/common.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
	ServeStaticModule.forRoot({
		rootPath: join(__dirname, '..', 'public')
	}),

	MongooseModule.forRoot(
		//'mongodb+srv://dextro:pngtjt88@mongo.zsnhb4l.mongodb.net/nestjs-pokemon?retryWrites=true&w=majority'
		'mongodb://dextro:7u4Qrnl5Gz39y3nDK1gucD@deepthinking.dev:27017/nestjs-pokemon?authSource=admin'
	),

	PokemonModule,
	CommonModule,
	SeedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
