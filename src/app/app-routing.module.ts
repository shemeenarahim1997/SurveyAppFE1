import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { TextfieldComponent } from './shared/components/textfield/textfield.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './admin/components/login/login.component';
import { TableComponent } from '../app/table/table.component';
const routes: Routes = [
  { path: 'button', component:ButtonComponent },
  { path: 'text', component: TextfieldComponent },
  { path: 'header', component: HeaderComponent  },
  {path:'demo',component:DemoComponent},
  {path:'',component:LoginComponent},
  {path:'table',component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
