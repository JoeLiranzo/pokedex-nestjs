import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
	constructor(
		@InjectModel(Pokemon.name)
		private readonly pokemonModel:Model<Pokemon>
	){}

	private readonly axios:AxiosInstance = axios

	async executeSeed(){
		await this.pokemonModel.deleteMany({})

		const url:string = 'https://pokeapi.co/api/v2/pokemon?limit=650'
		// return fetch(url).then(res => {
		// 	return res.json();
		// });

		const { data } = await this.axios.get<PokeResponse>(url)
		
		const pokemonToInsert = []
		data.results.forEach(async({name,url})=>{
			const segments = url.split('/')
			const no:number = +segments[segments.length-2]
	
			pokemonToInsert.push({name,no})
			//await this.pokemonModel.create(pokemon)
		})

		await this.pokemonModel.insertMany(pokemonToInsert)

   		return 'Seed executed'
	}
}
