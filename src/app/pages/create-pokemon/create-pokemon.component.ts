import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/shared/pokemon.model';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css'],
})
export class CreatePokemonComponent {
  // pokemon!: Pokemon
  newPokemon:Pokemon = new Pokemon ('', '',"");
  constructor(private formBuilder: FormBuilder,private service: PokedexService, private router: Router) {}

  createPokemonForm = this.formBuilder.group({
    name: ['', Validators.required],
    url: ['', Validators.required],
  });
  onSubmit(): void {
   this.service.addPokemon(this.newPokemon);
  this.router.navigate(['/']);
}
}
