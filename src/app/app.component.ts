import { Component } from '@angular/core';
import { ProductService } from './services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Marjane_Angular';
  productList:any[]=[];
  categoryList:any[]=[];
  cartList:any[]=[];
  TotalPrice:number=0;
  constructor(private prodServ: ProductService, private router: Router){
    this.prodServ.cartUpdated$?.subscribe((res:any)=>{
      this.getCartByCustomer();
    })

  }
  ngOnInit(): void {
    this.getAllCategories();
    this.getCartByCustomer();

  }
  navigateToProduct(categoryId: string) {
    // Optionally, perform any actions before navigation
    console.log(`Navigating to product page for category ID: ${categoryId}`);
    // Navigate to the 'products/:id' route with the specified category ID
    this.router.navigate(['/products', categoryId]);
}


  getAllCategories(){
    this.prodServ.getCategory().subscribe((res:any)=>{
      this.categoryList=res.data;
    })
  }
  getCartByCustomer(){
    this.prodServ.getCardDataByCustId(379).subscribe((res:any)=>{
      this.cartList = res.data;
    })
  }
  removeCart(cart_id: number) {
    console.log(cart_id);
    this.prodServ.removeProductByCartId(cart_id).subscribe((res:any)=>{
      console.log(res);
      this.getCartByCustomer();
    })
}
 // Methode zur Berechnung der Gesamtsumme der Produktpreise im Warenkorb
 getTotalPrice(): number {
  for (const cartItem of this.cartList) {
    this.TotalPrice += cartItem.productPrice;
  }
  return this.TotalPrice;
}
}
