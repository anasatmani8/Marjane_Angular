import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',


  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  product$:Observable<any>;
  constructor(private productServ: ProductService){
    this.product$ = this.productServ.getCategory().pipe(
      map((item:any)=>{
        return item.data;
      })
    );
  }
  getAllCategory(){ 

  }

}
