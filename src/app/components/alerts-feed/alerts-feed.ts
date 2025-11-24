import { Component, Input, OnInit } from '@angular/core';
import { Alert } from '../../models/Alert';
import { AlertItem } from '../alert-item/alert-item';
import { SearchBar } from '../ui/search-bar/search-bar';

@Component({
  selector: 'app-alerts-feed',
  imports: [AlertItem, SearchBar],
  templateUrl: './alerts-feed.html',
  styleUrl: './alerts-feed.scss',
})
export class AlertsFeed implements OnInit {
  searchQuery: string = '';
  @Input() alerts!: Alert[];
  sortedAlerts: Alert[] = [];
  filteredAlerts: Alert[] = [];

  onSearchChange(query: string) {
    this.searchQuery = query;
    this.searchItem(query);
  }

  ngOnInit(): void {
    this.sortedAlerts = [...this.alerts].sort((a, b) => a.severity - b.severity);
  }

  searchItem(query: string) {
    console.log('Searching for:', query);
    console.log('sortedAlerts:', this.sortedAlerts);

    this.filteredAlerts = this.sortedAlerts.filter((alert) => {
      const matches =
        alert.type.toLowerCase().includes(query.toLowerCase()) ||
        alert.severity.toString().includes(query.toLowerCase()) ||
        alert.location.toLowerCase().includes(query.toLowerCase());

      console.log(`Alert: ${alert.location}, Query: ${query}, Matches: ${matches}`);
      return matches;
    });

    console.log('Filtered results:', this.filteredAlerts);
  }
}
