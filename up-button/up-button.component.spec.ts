import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpButtonComponent } from './up-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UpButtonComponent', () => {
  let component: UpButtonComponent;
  let fixture: ComponentFixture<UpButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ UpButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
