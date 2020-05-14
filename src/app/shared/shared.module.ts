import { AuthService } from './service/auth.service';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
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
import { JwtModule } from '@auth0/angular-jwt';

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
    TableModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("access_token");
        }
      },
    }),
    ],
  exports:[
    MatComponentsModule,
    ButtonComponent,
    TextfieldComponent,
    TextAreaComponent,
    TableComponent

  ],
  providers:[
    AuthGuard,
    AuthService
  ]
})
export class SharedModule { }
