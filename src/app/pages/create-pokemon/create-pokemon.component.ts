import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/shared/pokemon.model';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css'],
})
export class CreatePokemonComponent {
  pokemon!: Pokemon
  constructor(private formBuilder: FormBuilder,private service: PokedexService) {}

  createPokemonForm = this.formBuilder.group({
    name: ['', Validators.required],
    url: ['', Validators.required],
  });
  onSubmit(){
    console.log(this.createPokemonForm.value);
    
  }
}
