import { BrowserModule } from '@angular/platform-browser';
import { MatComponentsModule } from './components/mat-components/mat-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AuthModule} from '../auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { ButtonComponent } from './components/button/button.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { TableComponent } from './components/table/table.component';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [
  TextfieldComponent,
  ButtonComponent,
  TextAreaComponent,
  TableComponent
],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatComponentsModule,
    TableModule
    // AuthModule
  ],
  exports:[
    MatComponentsModule,
    ButtonComponent,
    TextfieldComponent,
    TextAreaComponent
  ]
})
export class SharedModule { }
