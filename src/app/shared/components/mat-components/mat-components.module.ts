import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule
  ]
})
export class MatComponentsModule { }
