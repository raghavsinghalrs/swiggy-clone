import { CommonModule } from '@angular/common';
import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartService } from '../cartservice.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-restaurant-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './restaurant-detail.component.html',
  styleUrl: './restaurant-detail.component.scss'
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: any;
  menuItems: any[] = [];
  messages: { [key: number]: string } = {};
  favoriteMessage: { [key: number]: string } = {};
  restaurants = [
    { id: 1, name: 'Varalakshmi Tiffins', rating: '4.5 (45+ ratings)', cost: '₹250 for two', cuisine: 'South Indian', location: 'Filmnagar', deliveryTime: '25-30 mins' },
    { id: 2, name: 'Agra Sweets Banjara', rating: '4.4 (200+ ratings)', cost: '₹300 for two', cuisine: 'Sweets, Desserts', location: 'Rambagh Colony', deliveryTime: '25-30 mins' },
    { id: 3, name: 'Imperial Multicuisine Restaurant', rating: '4.3 (150+ ratings)', cost: '₹350 for two', cuisine: 'Biryani, Chinese', location: 'Mehdipatnam', deliveryTime: '30-35 mins' },
    { id: 4, name: 'Cheesecakes', rating: '4.5 (45+ ratings)', cost: '₹400 for two', cuisine: 'Sweets, Desserts', location: 'Inner Ring Road', deliveryTime: '25-30 mins' },
    { id: 5, name: 'KFC', rating: '4.5 (350+ ratings)', cost: '₹500 for two', cuisine: 'Fast Food, Chicken', location: 'Banjara Hills', deliveryTime: '30-35 mins' },
    { id: 6, name: 'Burger King', rating: '4.4 (500+ ratings)', cost: '₹400 for two', cuisine: 'Burgers, Fast Food', location: 'Jubilee Hills', deliveryTime: '25-30 mins' },
    { id: 7, name: 'Box8 - Desi Meals', rating: '4.3 (200+ ratings)', cost: '₹350 for two', cuisine: 'Indian, Biryani, Tiffins', location: 'Ameerpet', deliveryTime: '30-35 mins' },
    { id: 8, name: 'Baskin Robbins', rating: '4.5 (150+ ratings)', cost: '₹200 for two', cuisine: 'Ice Cream, Desserts', location: 'Kondapur', deliveryTime: '20-25 mins' }

  ];

  menus: { [key: number]: { name: string; cost: number; description: string; image: string }[] } = {
    1: [
      { name: 'Special Mutton Biryani', cost: 380, description: 'Signature mutton biryani with fragrant rice.', image: 'assets/mutton-biryani.jpg' },
      { name: 'Jeera Rice', cost: 160, description: 'Aromatic rice flavored with cumin.', image: 'assets/jeera-rice.jpg' },
      {name: 'Chicken Manchurian', cost: 280, description: 'Crispy fried chicken in spicy sauce.', image: 'assets/chicken-manchurian.jpg'}
      
    ],
    2: [
      { name: 'Gulab Jamun', cost: 50, description: 'Sweet milk dumplings soaked in syrup.', image: 'assets/gulab-jamun.jpg' },
      { name: 'Rasgulla', cost: 60, description: 'Soft and spongy balls soaked in sugar syrup.', image: 'assets/rasgulla.jpg' },
      { name: 'Badusha', cost: 70, description: 'flaky and slightly crispy.', image: 'assets/badusha.jpg' },

    ],
    3: [
      { name: 'Chicken Manchurian', cost: 280, description: 'Crispy fried chicken in spicy sauce.', image: 'assets/chicken-manchurian.jpg' },
      { name: 'Fried Rice', cost: 150, description: 'Fried rice with veggies and flavors.', image: 'assets/fried-rice.jpg' },
      { name: 'Egg Rice', cost: 120, description: ' savory dish of cooked rice with eggs.', image: 'assets/eggrice.jpg' },

    ],
    4: [
      { name: 'Blueberry Cheesecake', cost: 250, description: 'Creamy cheesecake topped with blueberries.', image: 'assets/blueberry-cheesecake.jpg' },
      { name: 'Chocolate Fudge Cake', cost: 300, description: 'Rich and gooey chocolate cake.', image: 'assets/chocolate-fudge-cake.jpg' },
      { name: 'strawberry cheesecake', cost: 200, description: 'creamy and tasty.', image: 'assets/strawberry.jpg' },

    ],
    5: [
      { name: 'Zinger Burger', cost: 220, description: 'Crispy fried chicken in a soft bun with mayo.', image: 'assets/zinger-burger.jpg' },
      { name: 'Bucket of Chicken', cost: 500, description: 'Classic fried chicken pieces served in a bucket.', image: 'assets/bucket-of-chicken.jpg' },
      { name: 'Masala Fries', cost: 120, description: 'Crispy fries with a blend of masala spices.', image: 'assets/masala-fries.jpg' }
   ],
   6:[
    { name: 'Whopper', cost: 250, description: 'Grilled beef patty with lettuce, tomato, and mayo.', image: 'assets/whopper.jpg' },
    { name: 'Chicken Royale', cost: 220, description: 'Crispy chicken fillet with lettuce and mayo.', image: 'assets/chicken-royale.jpg' },
    { name: 'French Fries', cost: 100, description: 'Crispy and salted fries.', image: 'assets/french-fries.jpg' }
 ],
 7: [
  { name: 'Paneer Tikka', cost: 180, description: 'Grilled paneer cubes marinated in spices.', image: 'assets/paneer-tikka.jpg' },
  { name: 'Butter Chicken Rice', cost: 220, description: 'Creamy butter chicken served with fragrant rice.', image: 'assets/butter-chicken-rice.jpg' },
  { name: 'Tandoori Roti', cost: 40, description: 'Soft and smoky flatbread cooked in a tandoor.', image: 'assets/tandoori-roti.jpg' }
],
8: [
  { name: 'Vanilla Ice Creams', cost: 150, description: 'Classic creamy vanilla ice cream.', image: 'assets/vanilla-ice-cream.jpg' },
  { name: 'Chocolate Fudge Brownie', cost: 180, description: 'Chocolate ice cream with chunks of brownie.', image: 'assets/chocolate-fudge-brownie.jpg' },
  { name: 'Strawberry Cheesecake', cost: 160, description: 'Strawberry ice cream with cheesecake pieces.', image: 'assets/strawberry-cheesecake.jpg' }
] ,
  };

  constructor(private route: ActivatedRoute, private cartService: CartService,private favoritesService: FavoritesService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurant = this.restaurants.find(rest => rest.id === id);
    this.menuItems = this.menus[id as keyof typeof this.menus] || [];

  }

  addToCart(item: any, index: number) {
    this.cartService.addToCart(item);
    this.messages[index] = 'Added to cart'; 
    setTimeout(() => {
      this.messages[index] = '';
    }, 3000);
    console.log('Added to cart:', item);
  }
  addToFavorites(item: any, index: number) {
    this.favoritesService.addFavorite(item);
    this.favoriteMessage[index] = 'Added to Favorites';
    setTimeout(() => {
      this.favoriteMessage[index] = '';
    }, 3000);
  }
}
