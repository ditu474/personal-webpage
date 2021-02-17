import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button[href]',
  template: `
    <a
      [href]="href"
      [attr.download]="isDownload ? filename : null"
      [attr.target]="isDownload ? '_blank' : null"
      ><ng-content></ng-content>
    </a>
  `,
  styleUrls: ['./primary-button.component.css'],
})
export class PrimaryButtonComponent {
  @Input() href!: string;
  @Input() isDownload: boolean = false;
  @Input() filename!: string;
}
