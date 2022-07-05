import { Component, OnInit } from '@angular/core';
// import { POKEMONS } from './mock-pokemon-list';
// import { Pokemon } from './pokemon/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  // pokemonList: Pokemon[] = POKEMONS;
  // searchedPokemon: Pokemon | undefined;

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  // searchPokemon(pokemonId: string) {
  //   const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
  //   if (pokemon) {
  //     console.log(`Vous avez choisi le pokémon ${pokemon.name}`);
  //     this.searchedPokemon = pokemon;
  //   } else {
  //     console.log(`Vous avez demandé un pokémon qui n'existe pas`);
  //     this.searchedPokemon = pokemon;
  //   }
  // }

}