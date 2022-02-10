import {Component, OnInit} from '@angular/core';

import {Pokemon} from '../../models/pokemon';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonService} from '../../services/pokemon.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-selected-pokemon',
  templateUrl: './selected-pokemon.component.html',
  styleUrls: ['./selected-pokemon.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({opacity: 1}))
      ])
    ])
  ]
})
export class SelectedPokemonComponent implements OnInit {
  selectedPokemon: Pokemon = null;
  filterInterval = null;
  rotationInterVal = null;

  /**Initial values for animations.
   */
  pokemonPosition = 400;
  filterDepth = 0.5;
  left = 200;

  constructor(public pokemonService: PokemonService,
              private router: Router,
              private actr: ActivatedRoute) {
  }
  /**I wanted to add some white noise effect to the pokedex.
   * Also wanted to get the  pokemon data if the service value is null with activatedroute but i don't want to make anymore overkills.
   * Redirecting if pokemon null.
   */
  async ngOnInit() {
    if (this.pokemonService.selectedPokemon) {
      this.selectedPokemon = this.pokemonService.selectedPokemon;
    } /*else {
      const id = this.actr.snapshot.params['id'];
      const pokemonToGet = await this.pokemonService.getPokemonById(id).toPromise();
    }*/
    if(!this.selectedPokemon){
      this.router.navigate(['../']);
    }
    this.filterInterval = setInterval(() => {
      if (this.filterDepth > 1) {
        this.filterDepth = 0.4;
      }
      this.filterDepth = this.filterDepth + 0.1;
    }, 200);
    this.rotationInterVal = setInterval(() => {
      this.selectedPokemon.selectedSpriteIndex--;
      if (this.selectedPokemon.selectedSpriteIndex < 1) {
        this.selectedPokemon.selectedSpriteIndex = 3;
      }
    }, 750);
  }

  /**Using simple Random to determine the catch is succesful or not if its not the pokemon jumps away else you
   * caught him/her.
   */
  tryToCatch() {
    if (this.selectedPokemon.isCached) {
      this.selectedPokemon.isCached = false;
      return;
    }
    const isDodging = Math.round(Math.random() * 3);
    const interval = setInterval(() => {
      if (this.left !== 800) {
        if (isDodging !== 1) {
          this.pokemonPosition = this.pokemonPosition + 5;
        }
        this.left = this.left + 5;
      } else {
        if (isDodging === 1) {
          alert('Gratulálok elkaptad a pokemont!');
          this.selectedPokemon.isCached = true;
          const indexOfThePokemon = this.pokemonService.pokemons.findIndex((p) => p.name === this.selectedPokemon.name);
          this.pokemonService.pokemons[indexOfThePokemon].isCached = true;
        } else {
          alert('Sajnos kitért pokemon, próbáld újra!');
        }
        clearInterval(interval);
        this.pokemonPosition = 400;
        this.left = 200;
      }
    });

  }

}
