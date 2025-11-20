import { Component, Input } from '@angular/core';
import { Alert, StormAlert } from '../../models/Alert';
import { MatIconModule } from '@angular/material/icon';
import { calculateTime } from '../../helpers/functions';

@Component({
  selector: 'app-alert-item',
  imports: [MatIconModule],
  templateUrl: './alert-item.html',
  styleUrl: './alert-item.scss',
})
export class AlertItem {
  calculateTime = calculateTime;
  @Input() alert!: Alert;

  iconMap: Record<string, string> = {
    earthquake: 'crisis_alert',
    flood: 'flood',
    storm: 'cyclone',
    tsunami: 'tsunami',
    volcano: 'volcano',
  };

  stormMap: Record<string, string> = {
    hurricane: 'cyclone',
    tornado: 'tornado',
    thunderstorm: 'thunderstorm',
  };

  severityMap: Record<number, string> = {
    1: '#EA3323',
    2: '#DA954B',
    3: '#EAC452',
    4: '#EAC452',
  };

  getSeverityColor(): string {
    const severity = this.alert.severity;
    return this.severityMap[severity as number] || '#CCCCCC';
  }

  getStormIcon(): string {
    if (this.alert.type === 'storm') {
      const stormAlert = this.alert as StormAlert;
      const stormType = stormAlert.stormType;
      return this.stormMap[stormType] || 'alert';
    }
    return '';
  }

  getSpecificSeverity(): string {
    const severity = (this.alert as StormAlert).specificSeverity;
    return severity.charAt(0).toUpperCase() + severity.slice(1);
  }
}
