import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";


import { UsersComponent } from './pages/users/users.component';
import { CustomMaterialModule } from './shared/custom-material/custom-material.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PostersComponent } from './pages/posters/posters.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { AboutComponent } from './pages/about/about.component';
import { CommunityComponent } from './pages/community/community.component';
import { EventsComponent } from './pages/events/events.component';
import { PosterCardComponent } from './components/poster-card/poster-card.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { CartComponent } from './pages/cart/cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CategoryComponent } from './pages/home/sections/category/category.component';
import { NewsletterComponent } from './pages/home/sections/newsletter/newsletter.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserCardComponent,
    PostersComponent,
    CollectionsComponent,
    BrandsComponent,
    AboutComponent,
    CommunityComponent,
    EventsComponent,
    PosterCardComponent,
    CartComponent,
    WishlistComponent,
    CategoryComponent,
    NewsletterComponent,
    FilterPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
    ToastrModule.forRoot({ timeOut: 1500 }),
    NgxSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
