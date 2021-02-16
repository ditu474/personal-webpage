import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  showMobileMenu = false;

  constructor() {}

  ngOnInit(): void {}

  mobileMenuHandler(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
