import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { PostersComponent } from './pages/posters/posters.component';
import { EventsComponent } from './pages/events/events.component';
import { CommunityComponent } from './pages/community/community.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'brands',
    component: BrandsComponent
  },
  {
    path: 'collections',
    component: CollectionsComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'designs',
    loadChildren: () => import('./pages/designs/designs.module').then(m => m.DesignsModule)
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'posters',
    component: PostersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
