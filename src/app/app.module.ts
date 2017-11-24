import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping/shopping.module';

import { environment } from '../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { AppComponent } from './app.component';
import { NotAvailableComponent } from './core/components/not-available/not-available.component';
import { CoreModule } from './core/core.module';
import { InputFirstCapDirective } from './directives/input-first-cap.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputFirstCapDirective,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: '**', component: NotAvailableComponent }
    ])
  ],
  providers: [
    AdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
