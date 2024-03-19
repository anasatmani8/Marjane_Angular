import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // Corrected styleUrls
})
export class ProductsComponent implements OnInit {




  isSidePanelVisible: boolean = false;
  productObj: any = {
    "productId": 0,
    "productSku": "",
    "productShortName": "",
    "productName": "",
    "productDescription": "",
    "productPrice": 0,
    "categoryId": 0,
    "categoryName": "",
    "createDate": new Date(), // Corrected property name
    "deliveryTimeSpan": "",
    "productImageUrl": ""
  };
  categoryList: any[] = [];
  productList: any[] = [];

  constructor(private productServ: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();
  }

  getAllCategory() {
    this.productServ.getCategory().subscribe((res: any) => {
      console.log('im there cat');
      this.categoryList = res.data;
    });
  }

  getProducts() {
    console.log(' prod 0');
    this.productServ.getProducts().subscribe({
      next: (res: any) => {
        console.log('im there prod');
        this.productList = res.data;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        // Handle the error here (e.g., show a friendly error message to the user)
      }
    });
  }

  isValidImageUrl(imageUrl: string): boolean {
    /*const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
    return !!imageUrl && validExtensions.some(ext => imageUrl.toLowerCase().endsWith(ext));*/

      return !!imageUrl && imageUrl.trim().split('.').length >= 2;
  
  
}
onEdit(item: any) {
  this.productObj = item;
  this.openSidePanel();
  }

  
  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }

  onSave() {
    this.productServ.saveProduct(this.productObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert('Product Created');
        this.getProducts();
      } else {
        alert(res.message);
      }
    });
  }

  onUpdate() {
    this.productServ.updateProduct(this.productObj).subscribe((res: any) => {
      //
      if (res.result) {
        alert('Product Updated');
        this.getProducts();
      } else {
        alert(res.message);
      }
    });
    }

    onDelete(item : any) {
      const isDelete = confirm('Are you sure want to delete?');
      if(isDelete) {
        this.productServ.deleteProduct(item.productId).subscribe((res: any) => {
          //debugger;
          if (res.result) {
            alert('Product Deleted');
            this.getProducts();
          } else {
            alert(res.message);
          }
        });
      }
    }

}
