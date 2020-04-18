import { BrowserModule } from '@angular/platform-browser';
import { MatComponentsModule } from './components/mat-components/mat-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { ButtonComponent } from './components/button/button.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
@NgModule({
  declarations: [
  TextfieldComponent,
  ButtonComponent,
  TextAreaComponent
],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatComponentsModule
  ],
  exports:[
    MatComponentsModule,
    ButtonComponent,
    TextfieldComponent,
    TextAreaComponent
  ]
})
export class SharedModule { }
