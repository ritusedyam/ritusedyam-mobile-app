import { Component, VERSION } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['signup-form.component.css']
})
export class SignupFormComponent  { 
  public hidePassword: boolean = true;
}
