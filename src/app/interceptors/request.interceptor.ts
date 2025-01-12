import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.includes('cloudinary.com')) {
      const modifiedReq = request.clone({
        withCredentials: false
      });
      return next.handle(modifiedReq);
    }
    request = request.clone({
      withCredentials: true,
      setHeaders: { 'Authorization': `Bearer null` }
    });
    return next.handle(request);
  }
}
