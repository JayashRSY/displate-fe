import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.5s ease', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  loginData$: Observable<any>;
  wishlistItems = [];
  cartItems = [];

  showSearch: boolean = true;
  showJoin: boolean = false;
  showMe: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (window.scrollY > 100) {
      this.showSearch = false;
    } else {
      this.showSearch = true;
    }
  }

  constructor(
    private _authService: AuthService,
    private _dataService: DataService,
    private _toastr: ToastrService
  ) { }
  ngOnInit(): void {
    this.loginData$ = this._authService.getLoginData();
    this.loginData$.subscribe(res => {
      if (res) {
        this.getWishlistItems()
        this.getCartItems()
      }
    })
  }
  getWishlistItems() {
    this._dataService.getWishlist().subscribe(res => {
      if (res.success) {
        this.wishlistItems = res.data;
        this._toastr.success(res.message, 'Success!');
      } else {
        this._toastr.error(res.message, 'Error!');
      }
    });
  }
  getCartItems() {
    this._dataService.getCart().subscribe(res => {
      if (res.success) {
        this.cartItems = res.data;
        this._toastr.success(res.message, 'Success!');
      } else {
        this._toastr.error(res.message, 'Error!');
      }
    });
  }
  onLogout() {
    this._authService.logout();
  }
}
