import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ProcutsComponent } from './procuts/procuts.component';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProcutsComponent },
];

@NgModule({
  declarations: [AppComponent, ProcutsComponent, CartComponent, FilterPipe],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
