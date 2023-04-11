import { Injectable } from '@angular/core';
import { pokemonData } from '../pokemon-mock';
import { Pokemon } from '../pokemon.model';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokemonData = pokemonData;
  arrayOfPokemonsFromService: Pokemon[] = pokemonData;
  constructor() { }

  getPokemonList() {
    return this.arrayOfPokemonsFromService;
  }

  addPokemon(newPokemon : Pokemon){
    this.arrayOfPokemonsFromService.push(newPokemon);
  }
}
