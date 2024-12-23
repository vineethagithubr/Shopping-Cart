import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../shared/models/product';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-category.products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './category.products.component.html',
  styleUrl: './category.products.component.css'
})
export class CategoryProductsComponent {
  route:ActivatedRoute=inject(ActivatedRoute)
  productsService:ProductsService=inject(ProductsService)
  products:Product[]=[]
  constructor(){
    this.route.paramMap.subscribe(params=>{
      this.products=[]
      this.productsService.products.forEach(prod=>{
        if(prod.category===params.get("cid")){
          this.products.push(prod)
        }
      })
    })
  }

}
