import { FormsModule } from '@angular/forms';
import { FilterNameComponent } from './filter-name.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FilterNameComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[FilterNameComponent]
})
export class FilterNameModule { }