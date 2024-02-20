import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { CustomerComponent } from './pages/admin/customer/customer.component';
import { CartComponent } from './pages/admin/cart/cart.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { OrderComponent } from './pages/admin/order/order.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { CustomerCartComponent } from './pages/website/customer-cart/customer-cart.component';
import { CheckoutComponent } from './pages/website/checkout/checkout.component';
import { CustomerOrdersComponent } from './pages/website/customer-orders/customer-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    CustomerComponent,
    CartComponent,
    CategoriesComponent,
    OrderComponent,
    ProductsComponent,
    LandingComponent,
    CategoryProductsComponent,
    CustomerCartComponent,
    CheckoutComponent,
    CustomerOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
