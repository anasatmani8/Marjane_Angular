import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WebProductsComponent } from './pages/website/web-products/web-products.component';
//import { CarouselModule } from 'ngx-bootstrap/carousel';
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
    CategoryProductsComponent,
    CustomerCartComponent,
    CheckoutComponent,
    CustomerOrdersComponent,
    LandingComponent,
    WebProductsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule, 
    MatIconModule,
    MatGridListModule,
    NgbCarouselModule,
    NgbModule,
    
  ],
  providers: [HttpClientModule,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
