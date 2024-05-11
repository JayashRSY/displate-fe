import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistItems = [];
  constructor(private _dataService: DataService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.getWishlistItems()
  }
  getWishlistItems() {
    this._dataService.getWishlist().subscribe((res: any) => {
      if (res.success) {
        this.wishlistItems = res.data;
        this._toastr.success(res.message, 'Success');
      } else {
        this._toastr.error(res.message, 'Error');
      }
    }, (error) => {
      this._toastr.error(error.error.message, 'Error')
    })
  }
  removeFromWishlist(item: any) {
    const payload = {
      productId: item._id,
    }
    this._dataService.removeFromWishlist(payload).subscribe(res => {
      if (res.success) {
        this.getWishlistItems()
        this._toastr.success(res.message, 'Success');
      } else {
        this._toastr.error(res.message, 'Error');
      }
    }, (error) => {
      this._toastr.error(error.error.message, 'Error')
    })
  }

  emptyWishlist() {
    this._dataService.emptyWishlist().subscribe(res => {
      if (res.success) {
        this.wishlistItems = [];
        this._toastr.success(res.message, 'Success');
      } else {
        this._toastr.error(res.message, 'Error');
      }
    }, (error) => {
      this._toastr.error(error.error.message, 'Error')
    })
  }
}
