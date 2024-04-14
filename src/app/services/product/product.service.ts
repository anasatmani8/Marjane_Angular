import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constants';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public cartUpdated$: Subject<boolean> = new Subject();
  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  }

  getProductByCategory(id:number) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT_BY_ID+ id);
  }

  getProducts() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT);
}

  saveProduct(obj:any) {
  return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATTE_PRODUCT,obj);
  }

  updateProduct(obj:any) {
  return this.http.post(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT,obj);
  }
  deleteProduct(id:number){
  	return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT+id);
  }
  addToCart(obj: any) {
    return this.http.post<any>(Constant.API_END_POINT + Constant.METHODS.ADD_TO_CART, obj);
  }
  getCardDataByCustId(cust_id:number){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_CART+ cust_id);
  }
  removeProductByCartId(cart_id:number) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.REMOVE_CART+ cart_id);
  }
  
}
