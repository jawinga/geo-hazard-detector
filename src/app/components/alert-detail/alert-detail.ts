import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Alert } from '../../models/Alert';

@Component({
  selector: 'app-alert-detail',
  imports: [MatIconModule],
  templateUrl: './alert-detail.html',
  styleUrl: './alert-detail.scss',
})
export class AlertDetail {
  @Input() alert!: Alert;
  @Input() alertType = 'volcano';
}
