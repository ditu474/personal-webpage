import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-detail[label][content]',
  template: `
    <div>
      <p class="label">{{ label | titlecase }}</p>
      <p class="content">{{ content }}</p>
    </div>
  `,
  styleUrls: ['./personal-detail.component.css'],
})
export class PersonalDetailComponent {
  @Input() label!: string;
  @Input() content!: string;
}
