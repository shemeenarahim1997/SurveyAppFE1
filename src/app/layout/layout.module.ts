import { RouterModule } from '@angular/router';
import { MatComponentsModule } from './../shared/components/mat-components/mat-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './components/main-nav/main-nav.component';

@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    MatComponentsModule,
    RouterModule
  ],
  exports:[MainNavComponent]
})
export class LayoutModule { }
