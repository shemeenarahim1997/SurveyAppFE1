import { ToastrService } from 'ngx-toastr';
import { AuthModule } from './auth/auth.module';
import { AppErrorHandler } from './shared/components/http-error-components/app-error-handler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponentsModule } from './shared/components/mat-components/mat-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../app/shared/shared.module';
import { AdminModule } from '../app/admin/admin.module';
import { LayoutModule } from './layout/layout.module';
import { ToastrModule } from 'ngx-toastr';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    AdminModule,
    AppRoutingModule,
    MatComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
  ToastrModule.forRoot()
  ],
  providers: [
    ToastrService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
