import { Component, Inject, inject } from '@angular/core';
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../shared/models/product';
import { SearchPipe } from '../../shared/pipes/search.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
productsService:ProductsService=inject(ProductsService);

addToCart(product:Product){
  this.productsService.cart.push(product)
}

inCart(product:Product){
  return this.productsService.cart.some((prod:Product )=>{
    return prod.id===product.id
  })
}

removeFromCart(product :Product){
  let index=-1
  this.productsService.cart.forEach((prod:Product,ind:number) => {
    if(product.id===prod.id) {
      index =ind
    }
  })
  this.productsService.searchQuery=""
}

}
