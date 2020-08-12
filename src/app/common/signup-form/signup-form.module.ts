import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SignupFormComponent } from "./signup-form.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule
  ],
  declarations: [SignupFormComponent],
  exports: [SignupFormComponent]
})
export class SignupFormModule {}
