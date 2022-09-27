import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
	private readonly axios:AxiosInstance = axios

	async executeSeed(){
		const url:string = 'https://pokeapi.co/api/v2/pokemon?limit=650'
		// return fetch(url).then(res => {
		// 	return res.json();
		// });

		const { data } = await this.axios.get<PokeResponse>(url)
		
		data.results.forEach(({name,url})=>{
			const segments = url.split('/')
			const no:number = +segments[segments.length-2]
			
		})

   		return data.results//'Seed executed'
	}
}
