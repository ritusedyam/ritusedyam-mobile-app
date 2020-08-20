import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { CropsListComponent } from "./crops-list.component";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";

const config = {
  apiKey: "AIzaSyAcrCgKORiwCPaywZ5l059QfnML90PNtRw",
  authDomain: "ritusedyam-mobile-app-77341.firebaseapp.com",
  databaseURL: "https://ritusedyam-mobile-app-77341.firebaseio.com",
  projectId: "ritusedyam-mobile-app-77341",
  storageBucket: "ritusedyam-mobile-app-77341.appspot.com",
  messagingSenderId: "427100545534",
  appId: "1:427100545534:web:7a3dffc41ec274c3daa0af",
  measurementId: "G-NEGSE9G2W4"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatChipsModule,
    MatIconModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  declarations: [CropsListComponent],
  exports: [CropsListComponent]
})
export class CropsListModule {}
