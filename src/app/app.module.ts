import { AppErrorHandler } from './shared/components/http-error-components/app-error-handler';
import { PostService } from './shared/service/post.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponentsModule } from './shared/components/mat-components/mat-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../app/shared/shared.module';
import { AdminModule } from '../app/admin/admin.module';
import { TableComponent } from '../app/table/table.component';
import { TableModule } from 'primeng/table';
import { TableService } from './shared/service/table.service';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AdminModule,
    TableModule,
    AppRoutingModule,
    MatComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    TableService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
