import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RestaurantsComponent } from '../restaurants/restaurants.component';

interface SearchItem {
  id?: number;
  name: string;
  image: string;
  type: 'food' | 'restaurant';
  description?: string;
  location?: string;
}
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,RouterModule,RestaurantsComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  items: SearchItem[] = [
    { name: 'Dosa', image: 'assets/dosa.avif', type: 'food' },
    { name: 'Idli', image: 'assets/idli.avif', type: 'food' },
    { name: 'Poori', image: 'assets/poori.avif', type: 'food' },
    { name: 'vada', image: 'assets/vada.avif', type: 'food' },
    { name: 'paratha', image: 'assets/paratha.avif', type: 'food' },
    { name: 'Biryani', image: 'assets/biryani.avif', type: 'food' },
    { name: 'Khichdi', image: 'assets/khichdi.avif', type: 'food' },
    { name: 'Varalakshmi Tiffins', image: 'assets/varalakshmi.avif', type: 'restaurant', id: 1, description: 'South Indian', location: 'Filmnagar' },
    { name: 'Agra Sweets Banjara', image: 'assets/agra-sweets.avif', type: 'restaurant', id: 2, description: 'Sweets, Desserts', location: 'Rambagh Colony' },
    { name: 'Imperial Multicuisine Restaurant', image: 'assets/imperial.avif', type: 'restaurant', id: 3, description: 'Biryani, Chinese', location: 'Mehdipatnam' },
    { name: 'cheesecakes', image: 'assets/cheesecakes.avif', type: 'restaurant', id: 4, description: 'Sweets, Desserts', location: 'Inner Ring Road' }
    // Add more items here
  ];
  filteredItems: SearchItem[] = this.items;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
  }

  goToRestaurantDetail(id: number | undefined) {
    if (id) {
      this.router.navigate(['/restaurant', id]);
    }
  }
}
