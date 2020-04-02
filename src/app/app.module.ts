import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {SharedModule} from '../app/shared/shared.module';
import {LayoutModule} from '../app/layout/layout.module';
import { DemoComponent } from './demo/demo.component';

import {AdminModule} from '../app/admin/admin.module';

import {UserModule} from '../app/user/user.module';
import { TableComponent } from '../app/table/table.component';
import {TableModule} from 'primeng/table';
import {TableService} from './shared/service/table.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TableComponent,   
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    LayoutModule,
    AdminModule,
    UserModule,
    TableModule,
    AppRoutingModule,
BrowserAnimationsModule

  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
