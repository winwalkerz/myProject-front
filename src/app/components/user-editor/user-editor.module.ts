import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditorComponent } from './user-editor.component';



@NgModule({
  declarations: [UserEditorComponent],
  imports: [
    CommonModule,
    NzButtonModule
  ]
})
export class UserEditorModule { }
