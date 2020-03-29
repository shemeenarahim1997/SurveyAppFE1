import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { CreateSurComponent } from './components/create-sur/create-sur.component';
import { InviteComponent } from './components/invite/invite.component';
import { ViewResultComponent } from './components/view-result/view-result.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LoginComponent, CreateSurComponent,InviteComponent,ViewResultComponent],
  imports: [
    CommonModule,SharedModule
  ]
})
export class AdminModule { }
