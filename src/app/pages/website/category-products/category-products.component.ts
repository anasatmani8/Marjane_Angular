import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {
  activeCategoryId:number=0;
  products:any[]= [];
  constructor(private activatedRoute: ActivatedRoute, private prodServ: ProductService){
    this.activatedRoute.params.subscribe((res:any )=>{
      this.activeCategoryId= res['id'];
      this.loadProducts();
      console.log('Category ID : ', this.activatedRoute);
    })
  }
  ngOnInit(): void {
    this.loadProducts();
  }
  

  loadProducts(){
    this.prodServ.getProductByCategory(this.activeCategoryId).subscribe((res:any)=>{
      console.log(res);
      this.products=res.data;
    })
  }

}
