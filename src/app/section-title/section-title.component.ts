import { Component } from '@angular/core';

@Component({
  selector: 'app-section-title',
  template: ` <div class="wrapper">
    <h2><ng-content></ng-content></h2>
    <div class="line"></div>
  </div>`,
  styleUrls: ['./section-title.component.css'],
})
export class SectionTitleComponent {}
