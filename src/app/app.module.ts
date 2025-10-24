import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
     FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }