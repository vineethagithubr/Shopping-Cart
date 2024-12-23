import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '',loadComponent:()=>import("./features/home/home.component").then(m=>m.HomeComponent)},
    {path:'product/:pid',loadComponent:()=>import("./features/product-details/product-details.component").then(m=>m.ProductDetailsComponent)},
    {path:'category/:cid',loadComponent:()=>import("./features/category.products/category.products.component").then(m=>m.CategoryProductsComponent)},
    {path: 'login',loadComponent:()=>import("./features/login/login.component").then(m=>m.LoginComponent)},
    {path:"cart",loadComponent:()=>import("./features/category.products/category.products.component").then(m=>m.CategoryProductsComponent)}

];
