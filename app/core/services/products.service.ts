import { HttpClient } from "@angular/common/http";
import { inject,Injectable } from "@angular/core";
import { Product } from "../../shared/models/product";

@Injectable ({providedIn:'root'})
export class ProductsService {

   products:Product[]=[]
   categories:string[]=[]
   httpClient:HttpClient=inject(HttpClient)
   userName: string = "";
   searchQuery: string = "";
   totalAmount: number=0;
  cart: any;
  isLoggedIn: boolean | undefined;

   getProducts() {
        return this.httpClient.get('/products.json');
     }
   getCategories(){
      return this.httpClient.get('/categories.json');
   }
}