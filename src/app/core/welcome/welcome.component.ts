import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

/**
 * @title SVG icons
 */
@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.component.html',
})
export class WelcomeComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'ritusedyam',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ritusedyam.svg'));
  }
}