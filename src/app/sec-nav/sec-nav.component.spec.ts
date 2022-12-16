import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecNAVComponent } from './sec-nav.component';

describe('SecNAVComponent', () => {
  let component: SecNAVComponent;
  let fixture: ComponentFixture<SecNAVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecNAVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecNAVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
