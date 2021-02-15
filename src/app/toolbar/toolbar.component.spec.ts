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
});
