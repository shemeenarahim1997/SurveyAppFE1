import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewComponent } from '../user/components/view/view.component';

@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
