import { Component } from '@angular/core';
import { pokemonData } from 'src/app/shared/pokemon-mock';
import { Pokemon } from 'src/app/shared/pokemon.model';
import { PokedexService } from 'src/app/shared/services/pokedex.service'; 

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent {
  arrayOfPokemon: Pokemon[] = [];

currentpokemon: Pokemon = {
  name: "",
  image: "",
  description: "",
};
constructor(private service: PokedexService) {}

ngOnInit(){
  this.arrayOfPokemon = this.service.getPokemonList();
}
onPokemonChange(event: Pokemon){
this.currentpokemon = event;
}
}

