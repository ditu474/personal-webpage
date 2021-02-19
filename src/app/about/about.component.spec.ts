import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { AboutComponent } from './about.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        PersonalDetailComponent,
        PrimaryButtonComponent,
        SectionTitleComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
