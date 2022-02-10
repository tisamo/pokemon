import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pokemon} from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemon[] = [];
  pokeTypes = [];
  selectedPokemon:Pokemon = null;
  constructor(private http: HttpClient) {
  }

  pokemnEnv = 'https://pokeapi.co/api/v2/';

  getTheFirstTwentyPokemons() {
    return this.http.get(this.pokemnEnv + 'pokemon?limit=20');
  }

  getPokemonByUrl(url: string) {
    return this.http.get(url);
  }

  getPokemonById(id: number) {
    return this.http.get(this.pokemnEnv +'pokemon/' + id);
  }
}
