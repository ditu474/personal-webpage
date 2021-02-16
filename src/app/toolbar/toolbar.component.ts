import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  showMobileMenu = false;

  mobileMenuHandler(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
