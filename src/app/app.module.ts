import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

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
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage 
    ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
