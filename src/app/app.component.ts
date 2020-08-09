import { Component, VERSION } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public cropsCollection: Array<string> = [];

  constructor(private db: AngularFirestore) {
      const crops = db.collection("crops").valueChanges();
      crops.subscribe((cropsList) => {
        // console.log(cropsList);
        cropsList.forEach((cropName) => {
          this.cropsCollection.push(cropName["name"]);
          console.log(cropName["name"]);
        })
      });
  }

  name = 'Welcome to Ritusedyam';
}
