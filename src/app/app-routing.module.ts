import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/poke-center',
    pathMatch: 'full'
  },
  {
    path: 'poke-center',
    loadChildren: () =>
      import('./pages/pokemon-center/pokemon-center.module').then((m) => m.PokemonCenterModule)
  },
  {
    path: 'poke-center/:id',
    loadChildren: () =>
      import('./pages/selected-pokemon/selected-pokemon.module').then((m) => m.SelectedPokemonModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
