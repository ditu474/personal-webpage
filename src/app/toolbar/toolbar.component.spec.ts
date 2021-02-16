import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the logo at first', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('img')[0]?.alt).toBe('logo');
  });

  it('should display the contact me button', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('.primary-nav-el')).toBeTruthy();
  });

  it('should not show the mobile menu at start', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('.mobile-menu')).toBeFalsy();
  });

  it('should have as showMobileMenu "false" at start', () => {
    expect(component.showMobileMenu).toEqual(false);
  });

  it('should call mobileMenuHandler when menu item is clicked', () => {
    const spy = spyOn(component, 'mobileMenuHandler');
    const element = fixture.debugElement.nativeElement;
    element.querySelector('.mobile-menu-icon').click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should change the value of showMobileMenu when mobileMenuHandler is called', () => {
    component.mobileMenuHandler();
    expect(component.showMobileMenu).toEqual(true);
    component.mobileMenuHandler();
    expect(component.showMobileMenu).toEqual(false);
  });

  it('should show the mobile menu if the menu item is clicked and hide if it is clicked again', () => {
    const menuIcon = fixture.debugElement.nativeElement.querySelector(
      '.mobile-menu-icon'
    );
    menuIcon.click();
    const element: HTMLElement = fixture.nativeElement;
    fixture.detectChanges();
    expect(element.querySelector('.mobile-menu')).toBeTruthy();
    menuIcon.click();
    fixture.detectChanges();
    expect(element.querySelector('.mobile-menu')).toBeFalsy();
  });
});
