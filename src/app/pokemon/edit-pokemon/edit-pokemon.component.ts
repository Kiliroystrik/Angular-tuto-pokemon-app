import { PokemonService } from './../pokemon.service';
import { Pokemon } from '../pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture">
    </p>

    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;
  constructor(
    private route: ActivatedRoute,
    private PokemonService: PokemonService
  ) { }

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.PokemonService.getPokemonById(+pokemonId)
    } else {
      this.pokemon = undefined;
    }
  }

}
