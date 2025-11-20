import { Component, Input, OnInit } from '@angular/core';
import { AlertDetail } from '../alert-detail/alert-detail';
import { Alert } from '../../models/Alert';
import { AlertItem } from '../alert-item/alert-item';
@Component({
  selector: 'app-alerts-feed',
  imports: [AlertItem],
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
