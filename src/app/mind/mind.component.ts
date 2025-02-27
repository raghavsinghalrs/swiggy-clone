import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../cartservice.service';

@Component({
  selector: 'app-mind',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './mind.component.html',
  styleUrl: './mind.component.scss'
})
export class MindComponent {
  foods = [
    { name: 'Dosa', image: 'assets/dosa.avif' },
    { name: 'Idli', image: 'assets/idli.avif' },
    { name: 'Poori', image: 'assets/poori.avif' },
    { name: 'Vada', image: 'assets/vada.avif' },
    { name: 'Paratha', image: 'assets/paratha.avif' },
    { name: 'Biryani', image: 'assets/biryani.avif' },
    { name: 'Khichdi', image: 'assets/khichdi.avif' }
  ];
  
}
