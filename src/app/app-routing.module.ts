import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },{
    path:'login',
    component:LoginComponent
    
  },
  {
    path: '',
    component: LayoutComponent,
    children: [ 
      {
        path: 'products',
        component: ProductsComponent, 
        title: 'Products'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
