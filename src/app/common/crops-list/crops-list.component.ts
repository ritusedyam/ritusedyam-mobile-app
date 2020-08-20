import { Component, VERSION } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ICrop } from './models/icrop-model';

@Component({
  selector: 'crops-list',
  templateUrl: './crops-list.component.html'
})
export class CropsListComponent  {
  public cropsCollection: Array<ICrop> = [];

  constructor(private db: AngularFirestore) {
      const crops = db.collection("crops").valueChanges();
      crops.subscribe((cropsList) => {
        cropsList.forEach((crop) => {
          this.cropsCollection.push({name: crop["name"], iconName: crop["cropName"]});
          console.log(crop["name"]);
        })
      });
  }
}
