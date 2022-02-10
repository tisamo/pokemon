import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonCenterComponent} from './pokemon-center.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [PokemonCenterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: PokemonCenterComponent}])
  ]
})
export class PokemonCenterModule { }
