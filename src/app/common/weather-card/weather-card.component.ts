import { Component, VERSION } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [ './weather-card.component.scss' ]
})
export class WeatherCardComponent  {
  name = 'Welcome to Ritusedyam';
}
