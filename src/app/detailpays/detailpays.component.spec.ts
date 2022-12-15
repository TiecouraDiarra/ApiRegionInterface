import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpaysComponent } from './detailpays.component';

describe('DetailpaysComponent', () => {
  let component: DetailpaysComponent;
  let fixture: ComponentFixture<DetailpaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailpaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
