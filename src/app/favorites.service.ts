import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  
  private storageKey = 'favoritesList';
  private favorites: any[] = [];

  constructor() {
    this.loadFavorites();
  }

  private loadFavorites() {
    const storedFavorites = localStorage.getItem(this.storageKey);
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  private saveFavorites() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.favorites));
  }

  addFavorite(item: any) {
    if (!this.favorites.find(fav => fav.name === item.name)) {
      this.favorites.push(item);
      this.saveFavorites();
    }
  }

  removeFavorite(item: any) {
    this.favorites = this.favorites.filter(fav => fav.name !== item.name);
    this.saveFavorites();
  }

  getFavorites(): any[] {
    return this.favorites;
  }
}
