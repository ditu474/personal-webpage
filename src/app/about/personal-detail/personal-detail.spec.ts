import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalDetailComponent } from './personal-detail.component';

describe('PersonalDetailComponent', () => {
  let component: PersonalDetailComponent;
  let fixture: ComponentFixture<PersonalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the label "any label" as "Any Label"', () => {
    component.label = 'any label';
    const element: HTMLElement = fixture.nativeElement;
    fixture.detectChanges();
    expect(element.querySelector('.label')?.textContent).toEqual('Any Label');
  });

  it('should display the content input', () => {
    const element: HTMLElement = fixture.nativeElement;
    component.content = 'any content';
    fixture.detectChanges();
    expect(element.querySelector('.content')?.textContent).toEqual(
      'any content'
    );
  });
});
