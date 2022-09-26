import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CommonModule } from './common/common.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
	ServeStaticModule.forRoot({
		rootPath: join(__dirname, '..', 'public')
	}),

	MongooseModule.forRoot(
		'mongodb://deepthinking.dev:27017/nestjs-pokemon'
	),

	PokemonModule,
	CommonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
