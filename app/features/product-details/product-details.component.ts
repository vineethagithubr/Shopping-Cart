import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../shared/models/product';
import { __param } from 'tslib';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  route:ActivatedRoute=inject(ActivatedRoute)
  productsService:ProductsService=inject(ProductsService)
  product:Product|undefined
  constructor(){
    this.route.paramMap.subscribe(params=>{
      console.log(params.get("pid"));
      this.productsService.products.forEach(prod=>{
        if(prod.id+""===params.get('pid')){
          this.product=prod
        }
      })
    })
  }

}
