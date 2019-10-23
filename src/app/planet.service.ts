import { Injectable } from '@angular/core';
import { Planet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets: Planet[] = [
    new Planet('Earth', 1),
    new Planet('Mars', 0.7),
    new Planet('Jupiter', 23),
  ];

  addPlanet(planet: Planet) {
    this.planets.push(planet);
  }

  sortPlanets() {
    this.planets.sort((a: Planet, b: Planet) => ((a.name > b.name) ? -1 : 1))
  }
}
