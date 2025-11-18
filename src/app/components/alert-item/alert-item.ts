import { Component, Input } from '@angular/core';
import { Alert } from '../../models/Alert';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-alert-item',
  imports: [MatIconModule],
  templateUrl: './alert-item.html',
  styleUrl: './alert-item.scss',
})
export class AlertItem {
  @Input() alert!: Alert;

  iconMap: Record<string, string> = {
    earthquake: 'earthquake',
    flood: 'water',
    storms: 'cloud',
    tsunami: 'waves',
    volcano: 'volcano',
  };
}
