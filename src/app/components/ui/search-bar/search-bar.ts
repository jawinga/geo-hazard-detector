import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-bar',
  imports: [MatIcon, MatIconModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  @Output() mySearch = new EventEmitter<string>();

  private searchTimer: any;

  searchQuery(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.mySearch.emit(value);
    }, 500);
  }
}
