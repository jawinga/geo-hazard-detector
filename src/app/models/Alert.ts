type AlertType = 'earthquake' | 'flood' | 'storm' | 'tsunami' | 'volcano';
type Severity = 1 | 2 | 3 | 4; //most to least
type EruptionType = 'effusive' | 'explosive' | 'phreatic';
type StormType = 'hurricane' | 'tornado' | 'thunderstorm' | 'cyclone' | 'windstorm';

//severity specifics
type AlertVolcanoeLevel = 'green' | 'yellow' | 'orange' | 'red';
type AlertEarthquakeLevel =
  | 'minor'
  | 'light'
  | 'moderate'
  | 'strong'
  | 'major'
  | 'great'
  | 'megaquake';

type AlertTropicalLevel =
  | 'tropical depression'
  | 'tropical storm'
  | 'category 1'
  | 'category 2'
  | 'category 3'
  | 'category 4'
  | 'category 5';
type AlertTornadoesLevel = 'EF0' | 'EF1' | 'EF2' | 'EF3' | 'EF4' | 'EF5';
type AlertGeneralStormLevel = 'low' | 'moderate' | 'high';
type AlertStormLevel = AlertTornadoesLevel | AlertGeneralStormLevel | AlertTropicalLevel;
type AlertFloodLevel = 'minor' | 'moderate' | 'major' | 'severe';
type AlertTsunamiLevel = 'minor' | 'moderate' | 'strong' | 'major' | 'mega-tsunami';

export interface Alert {
  id: number;
  type: AlertType;
  severity: Severity;
  time: Date;
  location: string;
  description: string;
}

export interface EarthquakeAlert extends Alert {
  type: 'earthquake';
  severity: Severity;
  specificSeverity: AlertEarthquakeLevel;
  magnitude: number;
  depth: number;
  coordinates: string;
}

export interface FloodAlert extends Alert {
  type: 'flood';
  severity: Severity;
  specificSeverity: AlertFloodLevel;
  waterLevel: number;
  floodStage: string;
  affectedArea: string;
}

export interface TsunamiAlert extends Alert {
  type: 'tsunami';
  severity: Severity;
  specificSeverity: AlertTsunamiLevel;
  waveHeight: number;
  originEarthQuake: string; //location of the Earthquake
  eta: number;
}

export interface VolcanoeAlert extends Alert {
  type: 'volcano';
  eruptionType: EruptionType;
  severity: Severity;
  specificSeverity: AlertVolcanoeLevel;
  ashHeight: number;
}

// Then discriminate based on stormType:
export interface TornadoAlert extends Alert {
  type: 'storm';
  stormType: 'tornado';
  specificSeverity: AlertTornadoesLevel;
  windSpeed: number;
  pressure: number;
}

export interface HurricaneAlert extends Alert {
  type: 'storm';
  stormType: 'hurricane';
  specificSeverity: AlertTropicalLevel;
  windSpeed: number;
  pressure: number;
}

export interface ThunderstormAlert extends Alert {
  type: 'storm';
  stormType: 'thunderstorm';
  specificSeverity: AlertGeneralStormLevel;
  windSpeed: number;
  pressure: number;
}

export type StormAlert = TornadoAlert | HurricaneAlert | ThunderstormAlert;
