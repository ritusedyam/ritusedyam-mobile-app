import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FeedBackDialogComponent } from "./feedback-dialog.component";
import { MatButtonModule } from "@angular/material/button";
import { FeedBackButtonComponent } from "./feedback-button.component";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [FeedBackDialogComponent, FeedBackButtonComponent],
  exports: [FeedBackDialogComponent, FeedBackButtonComponent]
})
export class FeedBackDialogModule {}
