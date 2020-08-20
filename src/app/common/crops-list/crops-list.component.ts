import { Component, VERSION } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { ICrop } from "./models/icrop-model";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "crops-list",
  templateUrl: "./crops-list.component.html"
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
        // console.log(crop["name"]);
        const iconUrl: string = "assets/icons/" +  crop["iconName"];
        iconRegistry.addSvgIcon(
          crop["iconName"],
          sanitizer.bypassSecurityTrustResourceUrl(
            iconUrl
          )
        );
      });
    });
  }
}
