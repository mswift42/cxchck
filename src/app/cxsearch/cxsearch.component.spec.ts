import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxsearchComponent } from './cxsearch.component';

describe('CxsearchComponent', () => {
  let component: CxsearchComponent;
  let fixture: ComponentFixture<CxsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
