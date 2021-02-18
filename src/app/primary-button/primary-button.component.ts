import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button[href]',
  template: `
    <a
      [href]="href"
      [attr.download]="filename.length > 0 ? filename : null"
      [attr.target]="filename.length > 0 ? '_blank' : null"
      ><ng-content></ng-content>
    </a>
  `,
  styleUrls: ['./primary-button.component.css'],
})
export class PrimaryButtonComponent {
  @Input() href!: string;
  @Input() filename: string = '';
}
