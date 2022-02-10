import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {PokemonService} from '../../services/pokemon.service';



@Component({
  selector: 'app-pokemon-center',
  templateUrl: './pokemon-center.component.html',
  styleUrls: ['./pokemon-center.component.scss']
})
export class PokemonCenterComponent implements OnInit, OnDestroy {
  pokemonCenterInhabitants: Pokemon[] = [];
  typesOfFetchedPokemons: string[] = [];
  onlyCatchedPokemons = false;
  selectedImageType = [];
  hoveredPokemonIndex = 0;
  localMons: Pokemon[] = [];
  intervalToClear: any = null;
  types: string[] = [];
  formControlSub = new Subscription();
  searchValue = '';
  pokemonToFind = new FormControl('');
  selectedTiles: string[] = [];


  constructor(public pokeService: PokemonService,
              private router: Router) {
  }
  /**
   * Using debounceTime to only fiiter array when the user stops typing for 500 ms.
   * */
  async ngOnInit() {
    this.formControlSub = this.pokemonToFind.valueChanges.pipe(debounceTime(500)).subscribe((pokemonTofind) => {
      if (!pokemonTofind.length) {
        this.localMons = this.pokeService.pokemons;
      } else {
        this.searchValue = pokemonTofind;
        this.localMons = this.pokeService.pokemons.filter((p) => p.name.includes(pokemonTofind));
      }
    });

    if (!this.pokeService.pokemons.length) {
      const pokemons: any = await this.pokeService.getTheFirstTwentyPokemons().toPromise();
      for (let p of pokemons.results) {
        const pokemon: any = await this.pokeService.getPokemonByUrl(p.url).toPromise();
        const types = [];
        for (let t of pokemon.types) {
          types.push(t.type.name);
          if (!this.pokeService.pokeTypes.includes(t.type.name)) {
            this.pokeService.pokeTypes.push(t.type.name);
          }
        }
        this.pokeService.pokemons.push({
          name: p.name,
          sprites: [
            pokemon.sprites.back_default,
            pokemon.sprites.back_shiny,
            pokemon.sprites.front_default,
            pokemon.sprites.front_shiny],
          types,
          isCached: false,
          selectedSpriteIndex: 3
        });
      }
      this.localMons = this.pokeService.pokemons;
    } else {
      this.localMons = this.pokeService.pokemons;
    }
  }

  /**
   * It's necessary to unsubscribe from not http observables.
   * */
  ngOnDestroy(): void {
    this.formControlSub.unsubscribe();
  }

  /**
   *  adds a string to selectedTiles array then filters the main array for results
   */
  addCategoryToSearchingValuesThenFilterPokemons(nameToSearch: string) {
    if (!this.selectedTiles.includes(nameToSearch)) {
      this.selectedTiles.push(nameToSearch);
    } else {
      this.selectedTiles = this.selectedTiles.filter((t) => t !== nameToSearch)
    }
    this.localMons = this.pokeService.pokemons.filter((p) => this.searchPokemonsWithSelectedFilters(this.selectedTiles, p.types));
    if (this.searchValue) {
      this.localMons = this.localMons.filter((p) => p.name.includes(this.searchValue));
    }
  }

  /**
   * With this solution you can filter an array with an another array.
   */
  searchPokemonsWithSelectedFilters(pokemonFilterValues: string[], examinedPokemonType: string[]) {
    return pokemonFilterValues.every(i => examinedPokemonType.includes(i));
  }

  /**
   * @param {number} The hovered item sprite gonna change until you leave with your mouse.
   */
  onHoveringPokemonCard(indexOfPokemon: number) {
    this.hoveredPokemonIndex = indexOfPokemon;
    this.intervalToClear = setInterval(() => {
      this.localMons[indexOfPokemon].selectedSpriteIndex--;
      if (this.localMons[indexOfPokemon].selectedSpriteIndex < 0) {
        this.localMons[indexOfPokemon].selectedSpriteIndex = 3;
      }
    }, 750);
  }

  /**
   * Set the sprites value to 3 which is the main sprite, then clears the interval. Cause intervals are not destroyed
   * by themselves.
   */
  mouseLeavePokemonCard() {
    this.localMons[this.hoveredPokemonIndex].selectedSpriteIndex = 3;
    clearInterval(this.intervalToClear);
  }

  /**
   * @param {Pokemon} Get the selected pokemon by index.
   */
  selectPokemon(pokemonIndex: number) {
    clearInterval(this.intervalToClear);
    this.pokeService.selectedPokemon = this.localMons[pokemonIndex];
    this.router.navigate(['/poke-center/', +pokemonIndex]).then(() => {});
  }

  modelChanged() {
    this.checkBox();
  }

  checkBox() {
    this.selectedTiles = [];
    if (this.onlyCatchedPokemons) {
      this.localMons = this.pokeService.pokemons.filter((p) => p.isCached === true);
    } else {
      this.localMons = this.pokeService.pokemons;
    }
  }


}
