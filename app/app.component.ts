import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './core/services/products.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shopping';
  //items:any
  productsService:ProductsService=inject(ProductsService)
  constructor(){
    this.productsService.getProducts().subscribe(res=>{
      //this.productsService.products=res
      //console.log(res);
      //this.items=res;
    })
    this.productsService.getCategories().subscribe(result=>{
      //this.productsService.categories=result
    })
  }
}
