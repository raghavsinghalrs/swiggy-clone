import { Component,OnInit } from '@angular/core';
import { CartService } from '../cartservice.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  
  cartItems: any[] = [];
  totalCost: number = 0;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalCost();
  }

  calculateTotalCost() {
    this.totalCost = this.cartItems.reduce((sum, item) => sum + (item.cost || 0), 0);
  }
}
