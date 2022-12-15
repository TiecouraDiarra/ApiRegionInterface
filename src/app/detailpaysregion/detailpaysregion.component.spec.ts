import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpaysregionComponent } from './detailpaysregion.component';

describe('DetailpaysregionComponent', () => {
  let component: DetailpaysregionComponent;
  let fixture: ComponentFixture<DetailpaysregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpaysregionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailpaysregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
