import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TextfieldComponent } from './components/textfield/textfield.component';


@NgModule({
  declarations: [ButtonComponent,TextfieldComponent],
  imports: [
    CommonModule
  ],
  exports:[ButtonComponent,TextfieldComponent]
})
export class SharedModule { }
