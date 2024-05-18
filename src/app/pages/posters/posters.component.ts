import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.scss']
})
export class PostersComponent implements OnInit {
  posters = [];
  wishlistCount;
  cartCount;

  constructor(private _dataService: DataService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllDesigns()
    this._dataService.getCartCount().subscribe(count => {

    })
  }
  getAllDesigns() {
    this._dataService.getAllDesigns().subscribe(res => {
      if (res.success) {
        this.posters = res.data;
        this._toastr.success(res.message, 'Success!');
      } else {
        this._toastr.error(res.message, 'Error!');
      }
    }, (error) => {
      this._toastr.error(error.error.message, 'Error')
    })
  }
  onAddToWishlist(poster) {
    const payload = {
      productId: poster._id
    }
    this._dataService.addToWishlist(payload).subscribe(res => {
      if (res.success) {
        this._toastr.success(res.message, 'Success!');
      } else {
        this._toastr.error(res.message, 'Error!');
      }
    }, (error) => {
      this._toastr.error(error.error.message, 'Error')
    })
  }
  onAddToCart(poster: any) {
    const payload = {
      productId: poster._id,
      quantity: 1
    }
    this._dataService.addToCart(payload).subscribe(res => {
      if (res.success) {
        this._toastr.success(res.message, 'Success!');
      } else {
        this._toastr.error(res.message, 'Error!');
      }
    }, (error) => {
      this._toastr.error(error.error.message, 'Error')
    })
  }
  applyFilters(event) {
    console.log(event)
  }
}
