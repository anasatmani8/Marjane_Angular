import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  productList: any[] = [];
  categoryList: any[] = [];
  cartList:any[]=[];
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
      "AddedDate": new Date().toISOString()
     }
     console.log(prouctId);

     this.prodServ.addToCart(addToCartObj).subscribe((res:any)=>{
      console.log(res);
      if (res.result) {
        alert('Product added  to cart successfully');
        this.prodServ.cartUpdated$?.next(true);
      }else {
        alert(res.message);
      }
     })
    }

    
}
