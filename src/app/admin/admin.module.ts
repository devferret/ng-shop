import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { AdminAuthGuardService } from './../admin/services/admin-auth-guard.service';
import { AuthGuardService } from './../shared/services/auth-guard.service';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      // Only Admin accessable
      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]  },
      { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]  },
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]  },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]  },
    ])
  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ]
})
export class AdminModule { }
