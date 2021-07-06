import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider'
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductListItemComponent } from './pages/product-list/product-list-item/product-list-item.component';
import { BrandListComponent } from './pages/brand-list/brand-list.component';
import { BrandListItemComponent } from './pages/brand-list/brand-list-item/brand-list-item.component';
import { DepartmentListComponent } from './pages/department-list/department-list.component';
import { DepartmentListItemComponent } from './pages/department-list/department-list-item/department-list-item.component';
import { ShopListComponent } from './pages/shop-list/shop-list.component';
import { ShopListItemComponent } from './pages/shop-list/shop-list-item/shop-list-item.component';
import { ProductStockListComponent } from './pages/product-stock-list/product-stock-list.component';
import { ProductStockListItemComponent } from './pages/product-stock-list/product-stock-list-item/product-stock-list-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ProductListComponent,
    ProductListItemComponent,
    BrandListComponent,
    BrandListItemComponent,
    DepartmentListComponent,
    DepartmentListItemComponent,
    ShopListComponent,
    ShopListItemComponent,
    ProductStockListComponent,
    ProductStockListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GaugeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
