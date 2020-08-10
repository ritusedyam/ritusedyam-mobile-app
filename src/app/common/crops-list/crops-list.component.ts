import { Component, VERSION } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'crops-list',
  templateUrl: './crops-list.component.html'
})
export class CropsListComponent  {
  public cropsCollection: Array<string> = [];

  constructor(private db: AngularFirestore) {
      const crops = db.collection("crops").valueChanges();
      crops.subscribe((cropsList) => {
        cropsList.forEach((cropName) => {
          this.cropsCollection.push(cropName["name"]);
          console.log(cropName["name"]);
        })
      });
  }
}
