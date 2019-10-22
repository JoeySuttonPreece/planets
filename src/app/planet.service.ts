import { Injectable } from '@angular/core';
import { Planet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private planets: Planet[] = [
    new Planet('earth', 1),
    new Planet('mars', 0.7),
    new Planet('jupiter', 23),
  ];

  getPlanets() {
    return this.planets;
  }

  addPlanet(planet: Planet) {
    this.planets.push(planet);
  }


}
