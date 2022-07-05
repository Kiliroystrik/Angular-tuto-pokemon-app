import { Router } from '@angular/router';
import { PokemonService } from './../pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: [
    './pokemon-form.component.css'
  ]
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;
  types: string[];

  constructor(private PokemonService: PokemonService, private Router: Router) { }

  ngOnInit() {
    // pokemonTypeList
    this.types = this.PokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean {

    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {

    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.pokemon.types.push(type)
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1)
    }
  }

  isTypesValid(type: string): boolean {

    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true
  }

  onSubmit() {
    console.log('Form Submited');
    this.Router.navigate(['/pokemon', this.pokemon.id])
  }
}
