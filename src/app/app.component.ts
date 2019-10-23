import { Component } from '@angular/core';
import { PlanetService } from './planet.service';
import { Planet } from './planet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputName: string = '';
  inputSize: number = 0;
  constructor(public planetService: PlanetService) {}

  createPlanet() {
    if (this.inputName != '') {
      this.planetService.addPlanet(new Planet(this.inputName, this.inputSize));
      this.inputName = '';
      this.inputSize = 0;
    }
  }
}
