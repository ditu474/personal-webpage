import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroComponent, PrimaryButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the profile picture', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('img')?.alt).toBe('profile picture');
  });

  it('should display an h1 with a message', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('h1')?.textContent).toBe(
      'I turn your ideas into functional software'
    );
  });

  it('should display a primary button', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('app-primary-button')).toBeTruthy();
  });
});
