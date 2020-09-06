import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

/**
 * @title SVG icons
 */
@Component({
  selector: 'feedback-dialog',
  templateUrl: 'feedback-dialog.component.html',
  styleUrls: [ 'feedback-dialog.component.css' ]
})
export class FeedBackDialogComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'star',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg'));
  }
}