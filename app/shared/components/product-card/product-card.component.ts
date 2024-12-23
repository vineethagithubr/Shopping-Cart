import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';
import { ElipsisPipe } from '../../pipes/elipsis.pipe';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input ({required: true})product! :Product;
  @Input ({required: true})isLoggedIn: boolean=false;
  @Input({required: true})inCart: boolean=false;
  @Output() addToCartEvent:EventEmitter<Product>=new EventEmitter()
  @Output() removeFromCartEvent: EventEmitter<Product>=new EventEmitter()

  addToCart(product:Product){
    this.addToCartEvent.emit(product)

  }
  removeFromCart(product:Product){
    this.removeFromCartEvent.emit(product)
  }


}
