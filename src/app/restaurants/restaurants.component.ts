import { CommonModule,NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent {
  constructor(private router: Router) {}

  restaurants = [
    { id: 1, name: 'Varalakshmi Tiffins', image: 'assets/varalakshmi.avif', description: 'South Indian', location: 'Filmnagar' },
    { id: 2, name: 'Agra Sweets Banjara', image: 'assets/agra-sweets.avif', description: 'Sweets, Desserts', location: 'Rambagh Colony' },
    { id: 3, name: 'Imperial Multicuisine Restaurant', image: 'assets/imperial.avif', description: 'Biryani, Chinese', location: 'Mehdipatnam' },
    { id:4,name:'cheesecakes',image:'assets/cheesecakes.avif',description: 'Sweets, Desserts',location: 'Inner Ring Road'},
    { id:5,name:'KFC',image:'assets/kfc.avif',description: 'Burgers,fast food',location: 'Inner Ring Road'},
    { id:6,name:'Burger King',image:'assets/burger_king.avif',description: 'Burgers',location: 'Attapur'},
    { id:7,name:'BOX8-Desi Meals',image:'assets/box8.avif',description: 'North Indian,Biryani',location: 'Inner Ring Road'},
    { id:8,name:'Baskin Robbins',image:'assets/baskin.avif',description: 'Desserts,Ice cream',location: 'Redhills'},

    
  ];

  goToRestaurantDetail(id: number) {
    this.router.navigate(['/restaurant', id]);
  }
}
