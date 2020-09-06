import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { MatDialog } from "@angular/material/dialog";
import { FeedBackDialogComponent } from "./feedback-dialog.component";

/**
 * @title SVG icons
 */
@Component({
  selector: "feedback-button",
  templateUrl: "feedback-button.component.html"
})
export class FeedBackButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(FeedBackDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
