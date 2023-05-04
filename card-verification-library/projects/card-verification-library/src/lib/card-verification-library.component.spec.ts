import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVerificationLibraryComponent } from './card-verification-library.component';

describe('CardVerificationLibraryComponent', () => {
  let component: CardVerificationLibraryComponent;
  let fixture: ComponentFixture<CardVerificationLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVerificationLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVerificationLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
