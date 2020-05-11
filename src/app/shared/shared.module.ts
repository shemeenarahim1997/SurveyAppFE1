import { ConfirmEqualValidatorDirective } from './service/confirm-equal-validator.directive';
import { TableService } from './service/table.service';
import { BrowserModule } from '@angular/platform-browser';
import { MatComponentsModule } from './components/mat-components/mat-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { ButtonComponent } from './components/button/button.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { TableComponent } from './components/table/table.component';
import {TableModule} from 'primeng/table';
import { CardComponent } from './components/card/card.component';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
  TextfieldComponent,
  ButtonComponent,
  TextAreaComponent,
  TableComponent,
  CardComponent
],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatComponentsModule,
    TableModule,
    CardModule
  ],
  exports:[
    MatComponentsModule,
    ButtonComponent,
    TextfieldComponent,
    TextAreaComponent,
    TableComponent,
    CardComponent
  ],
  providers:[
    TableService,
    ConfirmEqualValidatorDirective
  ]
})
export class SharedModule { }
