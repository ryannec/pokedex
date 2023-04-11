import { Injectable } from '@angular/core';
import { pokemonData } from '../pokemon-mock';
import { Pokemon } from '../pokemon.model';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokemonData = pokemonData;
  constructor() { }

  getPokemonsFromData() {
    return pokemonData;
  }
  addPokemon(pokemon : Pokemon){}
}
