type AlertType = 'earthquake' | 'flooding' | 'storm' | 'tsunami' | 'volcanoe';
type Severity = 1 | 2 | 3 | 4; //most to least
type EruptionType = 'effusive' | 'explosive' | 'phreatic';
type AlertVolcanoeLevel = 'green' | 'yellow' | 'orange' | 'red';
type StormType = 'hurricane' | 'tornado' | 'thunderstorm';

export interface Alert {
  id: number;
  type: AlertType;
  severity: Severity | AlertVolcanoeLevel;
  time: Date;
  location: string;
  description: string;
}

export interface EarthquakeAlert extends Alert {
  type: 'earthquake';
  severity: Severity;
  magnitude: number;
  depth: number;
  coordinates: string;
}

export interface FloodingAlert extends Alert {
  type: 'flooding';
  severity: Severity;
  waterLevel: number;
  floodStage: string;
  affectedArea: string;
}

export interface TsunamiAlert extends Alert {
  type: 'tsunami';
  severity: Severity;
  waveHeight: number;
  originEarthQuake: string; //location of the Earthquake
  eta: number;
}

export interface VolcanoeAlert extends Alert {
  type: 'volcanoe';
  eruptionType: EruptionType;
  severity: AlertVolcanoeLevel;
  ashHeight: number;
}

export interface StormAlert extends Alert {
  type: 'storm';
  stormType: StormType;
  windSpeed: number;
  pressure: string;
}
