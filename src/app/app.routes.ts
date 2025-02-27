
import { Routes } from '@angular/router';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { MindComponent } from './mind/mind.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchComponent } from './search/search.component';
import { OffersComponent } from './offers/offers.component';




export const routes: Routes = [
  { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to the restaurants page
    { path: 'home', component: HomeComponent }, // Route for the list of restaurants
    { path: 'restaurant/:id', component: RestaurantDetailComponent } ,
    { path: 'food/:name', component: FoodDetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'sign-in', component: SigninComponent },
    {
      path: 'favorites', component: FavoritesComponent 
    },
    {
      path:'search',component:SearchComponent
    },
    {
      path:'offers',component:OffersComponent
    }
  ];