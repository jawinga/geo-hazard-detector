import { Component } from '@angular/core';
import { AlertsFeed } from '../../components/alerts-feed/alerts-feed';
import { Mapbox } from '../../components/mapbox/mapbox';
import { mockAlerts } from '../../data/mock';

@Component({
  selector: 'app-dashboard',
  imports: [AlertsFeed, Mapbox],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  mockData = mockAlerts;
}
