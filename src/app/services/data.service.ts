import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private wishlistDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private http: SharedService) { }

  setWishlistData(wishlist: Observable<any>): void {
    this.wishlistDataSubject.next(wishlist);
  }
  getWishlistData(): Observable<any> {
    return this.wishlistDataSubject.asObservable();
  }

  // USER
  getAllUsers(): Observable<any> {
    return this.http.get('/users/getAllUsers');
  }
  getUserByEmail(email: String): Observable<any> {
    return this.http.get('/users/getUserByEmail/', email);
  }
  deleteUserByEmail(email: String): Observable<any> {
    return this.http.delete('/users/deleteUserByEmail/', email);
  }
  updateUserByEmail(payload: any): Observable<any> {
    return this.http.put('/users/updateUserByEmail', payload);
  }

  // DESIGN
  createDesigns(payload: any): Observable<any> {
    return this.http.post('/designs/createDesigns', payload);
  }
  getAllDesigns(): Observable<any> {
    return this.http.get('/designs/getAllDesigns');
  }

  // ACCOUNT
  addToCart(payload: any): Observable<any> {
    return this.http.put('/account/addToCart', payload);
  }
  getCart(): Observable<any> {
    return this.http.get('/account/getCart');
  }
  removeFromCart(payload: any): Observable<any> {
    return this.http.put('/account/removeFromCart', payload);
  }
  emptyCart(): Observable<any> {
    return this.http.delete('/account/emptyCart');
  }

  // WISHLIST
  addToWishlist(payload: any): Observable<any> {
    return this.http.put('/account/addToWishlist', payload);
  }
  getWishlist(): Observable<any> {
    return this.http.get('/account/getWishlist');
  }
  removeFromWishlist(payload: any): Observable<any> {
    return this.http.put('/account/removeFromWishlist', payload);
  }
  emptyWishlist(): Observable<any> {
    return this.http.delete('/account/emptyWishlist');
  }
}