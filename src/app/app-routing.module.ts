import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandDetailsComponent } from './pages/brand-details/brand-details.component';
import { BrandListComponent } from './pages/brand-list/brand-list.component';
import { DepartmentDetailsComponent } from './pages/department-details/department-details.component';
import { DepartmentListComponent } from './pages/department-list/department-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { ShopListComponent } from './pages/shop-list/shop-list.component';

const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "products", component: ProductListComponent },
  { path: "products/:id", component: ProductDetailsComponent },
  { path: "shops", component: ShopListComponent },
  { path: "shops/:id", component: ShopDetailsComponent },
  { path: "departments", component: DepartmentListComponent },
  { path: "departments/:id", component: DepartmentDetailsComponent },
  { path: "brands", component: BrandListComponent },
  { path: "brands/:id", component: BrandDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
