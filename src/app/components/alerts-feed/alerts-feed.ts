import { Component, Input } from '@angular/core';
import { AlertDetail } from '../alert-detail/alert-detail';
import { Alert } from '../../models/Alert';
import { AlertItem } from '../alert-item/alert-item';
@Component({
  selector: 'app-alerts-feed',
  imports: [AlertDetail, AlertItem],
  templateUrl: './alerts-feed.html',
  styleUrl: './alerts-feed.scss',
})
export class AlertsFeed {
  @Input() alerts!: Alert[];
}
