import { Component, VERSION } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { ICrop } from "./models/icrop-model";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "crops-list",
  templateUrl: "./crops-list.component.html",
   styleUrls: [ './crops-list.component.css' ]
})
export class CropsListComponent {
  public cropsCollection: Array<ICrop> = [];

  constructor(
    private db: AngularFirestore,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    const crops = db.collection("crops").valueChanges();
    crops.subscribe(cropsList => {
      cropsList.forEach(crop => {
        this.cropsCollection.push({
          name: crop["name"],
          iconName: crop["iconName"]
        });
        
        const iconUrl: string = `assets/icons/${crop["iconName"]}.svg`;
        console.log(iconUrl);
         console.log(`${crop["iconName"]}.svg`);
        iconRegistry.addSvgIcon(
          `${crop["iconName"]}.svg`,
          sanitizer.bypassSecurityTrustResourceUrl(
            iconUrl
          )
        );
      });
    });
  }
}
