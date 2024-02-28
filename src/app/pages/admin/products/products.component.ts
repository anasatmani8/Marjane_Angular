import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',

  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  isSidePanelVisible:boolean=false;
  productObj: any = {
    "productId":0,
    "productSku":"",
    "productShortName":"",
    "productName": "",
    "productDescription": "",
    "productPrice": 0,
    "categoryId": 0,
    "createDtae": new Date,
    "deliveryTimeSpan":"",
    "productImageUrl":""
  }

constructor(private productServ: ProductService){
  
}

  openSidePanel(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel(){
    this.isSidePanelVisible = false;
  }

}
