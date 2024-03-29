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
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { ArtistGuard } from './guards/artist.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthGuard]
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
    loadChildren: () => import('./pages/designs/designs.module').then(m => m.DesignsModule),
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
    component: UsersComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    canActivate: [UserGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
