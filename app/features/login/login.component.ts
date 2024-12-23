import { Component, inject } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  productsService:ProductsService=inject(ProductsService)
  router:Router= inject(Router)
  login(userName:string) {
    this.productsService.userName =userName
    this.router.navigate(["/"])
  }

}
