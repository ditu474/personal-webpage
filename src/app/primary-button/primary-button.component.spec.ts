import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryButtonComponent } from './primary-button.component';

describe('PrimaryButtonComponent', () => {
  let component: PrimaryButtonComponent;
  let fixture: ComponentFixture<PrimaryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set #href input to href attribute', () => {
    component.href = '#AnyHref';
    fixture.detectChanges();
    const element: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    const url: string[] = element.href.split('/');
    const href = url[url.length - 1];
    expect(href).toEqual('#AnyHref');
  });

  it('should have the target and download attr if #filename is provided', () => {
    component.filename = 'test';
    fixture.detectChanges();
    const element: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(element.download).toEqual('test');
    expect(element.target).toEqual('_blank');
  });

  it('should not have the target and download attr if #filename is not provided', () => {
    const element: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(element.download).toBeFalsy();
    expect(element.target).toBeFalsy();
  });
});
