import { MatComponentsModule } from './components/mat-components/mat-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
  TextfieldComponent,
  ButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatComponentsModule
  ],
  exports:[
    MatComponentsModule,
    ButtonComponent,
    TextfieldComponent
  ]
})
export class SharedModule { }
