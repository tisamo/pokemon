import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import {HttpClientModule} from '@angular/common/http';


describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientModule,], providers:[PokemonService]});
    service = TestBed.inject(PokemonService);
  });

  it('Should return pokemons', () => {
    service.getTheFirstTwentyPokemons()
      .subscribe((res:any)=>{
        expect(res.results.length).toBeGreaterThan(10);
      });
  });


  it('#getValue should return real value', () => {
    service.getPokemonById(1)
      .subscribe((res:any)=>{
        expect(res.length).toBe(true);
      });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
