import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Router, ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-web-products',
  templateUrl: './web-products.component.html',
  styleUrls: ['./web-products.component.css']
})
export class WebProductsComponent implements OnInit {


  productList: any[] = [];
  categoryList: any[] = [];
  loading = false;

  constructor(
    private prodServ: ProductService,
    private router: Router,
    private route: ActivatedRoute // Inject ActivatedRoute here
  ) {}
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.loadData();
      this.getAllCategories();
    });
  }

  loadData() {
    this.loading = true;
    this.prodServ.getProducts()
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        (res: any) => {
          this.productList = res.data;
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
  }

  getAllCategories() {
    this.prodServ.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }

  navigateToProduct(categoryId: string) {
    console.log(`Navigating to product page for category ID: ${categoryId}`);
    this.router.navigate(['/products', categoryId]);
  }

  AddToCart(prouctId: number) {
     const addToCartObj = {
      "CartId": 0,
      "CustId": 379,
      "ProductId": prouctId,
      "Quantity": 1,
      "AddedDate": new Date()
     }
     
     this.prodServ.addToCart(addToCartObj).subscribe((res:any)=>{
      if (res.result) {
        alert('Product to cart');
      }else {
        alert(res.message);
      }
     })
    }
}
