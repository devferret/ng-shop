import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotAvailableComponent } from './components/not-available/not-available.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: '/products', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    NotAvailableComponent
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
