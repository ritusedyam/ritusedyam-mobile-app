import { Component, VERSION } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: [ './feature-card.component.scss' ]
})
export class FeatureCardComponent  {
  name = 'Welcome to Ritusedyam';
}
