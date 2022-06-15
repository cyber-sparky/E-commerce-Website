import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartserviceService } from '../cartservice.service';
@Component({
  selector: 'app-procuts',
  templateUrl: './procuts.component.html',
  styleUrls: ['./procuts.component.css'],
})
export class ProcutsComponent implements OnInit {
  public searchTerm: string = '';
  public totalItem!: number;
  searchKey: string = '';
  public productList: any;
  constructor(
    private api: ApiService,
    private cartService: CartserviceService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });

    this.api.getProduct().subscribe((res) => {
      this.productList = res;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
