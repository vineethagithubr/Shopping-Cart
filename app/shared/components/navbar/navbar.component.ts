import { Component,inject } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  productsService:ProductsService=inject(ProductsService)

  logout(){
    this.productsService.userName="";
    this.productsService.categories=[];
  }
  

}

