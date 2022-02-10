import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SelectedPokemonComponent} from './selected-pokemon.component';



@NgModule({
  declarations: [SelectedPokemonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SelectedPokemonComponent}])
  ]
})
export class SelectedPokemonModule { }
