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
  wishlistCount$: Observable<number>
  cartCount$: Observable<number>

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
    if(localStorage.getItem('user')) {
      this.getWishlistItems()
      this.getCartItems()
    }
    this.loginData$ = this._authService.getLoginData();
    this.wishlistCount$ = this._dataService.getWishlistCount();
    this.cartCount$ = this._dataService.getCartCount();
  }
  getWishlistItems() {
    this._dataService.getWishlist().subscribe((res: any) => {
      if (res.success) {
        this._dataService.setWishlistCount(res.data.length)
      } else {
        this._toastr.error(res.message, 'Error');
      }
    }, (error) => {
      this._toastr.error(error.error.message, 'Error')
    })
  }
  getCartItems() {
    this._dataService.getCart().subscribe((res: any) => {
      if (res.success) {
        this._dataService.setCartCount(res.data.length)
      } else {
        this._toastr.error(res.message, 'Error');
      }
    }, (error) => {
      this._toastr.error(error.error.message, 'Error')
    })
  }
  onLogout() {
    this._authService.logout();
  }
}
