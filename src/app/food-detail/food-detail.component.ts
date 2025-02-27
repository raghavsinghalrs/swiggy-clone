import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MindComponent } from '../mind/mind.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cartservice.service';
import { FavoritesService } from '../favorites.service';



@Component({
  selector: 'app-food-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-detail.component.html',
  styleUrl: './food-detail.component.scss'
})
export class FoodDetailComponent implements OnInit {
  food: any; 
  message: string = '';
  favoriteMessage: string = '';
  foods = [
    { name: 'Dosa', image: 'assets/dosa.avif', cost: 50, description: 'A delicious South Indian crepe.' },
    { name: 'Idli', image: 'assets/idli.avif', cost: 40, description: 'Soft and fluffy steamed rice cakes.' },
    { name: 'Poori', image: 'assets/poori.avif', cost: 60, description: 'Deep-fried bread, popular for breakfast.' },
    { name: 'Vada', image: 'assets/vada.avif', cost: 30, description: 'Crispy and savory fried snack.' },
    { name: 'Paratha', image: 'assets/paratha.avif', cost: 70, description: 'Layered flatbread, often stuffed.' },
    { name: 'Biryani', image: 'assets/biryani.avif', cost: 150, description: 'Fragrant rice dish with spices.' },
    { name: 'Khichdi', image: 'assets/khichdi.avif', cost: 45, description: 'Comforting dish made with rice and lentils.' }
  ];

  constructor(private route: ActivatedRoute, private cartService: CartService,private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    const foodName = this.route.snapshot.paramMap.get('name');
    if (foodName) {
      this.food = this.foods.find(item => item.name === foodName);
    }
  }

  addToCart(food: any) {
    this.cartService.addToCart(food);
    this.message = 'Added to cart';
    console.log('Added to cart:', food); 
  }
  addToFavorites(item: any): void {
    this.favoritesService.addFavorite(item);
    this.favoriteMessage = 'Added to Favorites';
  }
}
