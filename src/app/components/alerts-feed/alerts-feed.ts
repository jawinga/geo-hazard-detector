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
  @Input() alerts!: Alert[];
  sortedAlerts: Alert[] = [];

  ngOnInit(): void {
    this.sortedAlerts = [...this.alerts].sort((a, b) => a.severity - b.severity);
  }
}
