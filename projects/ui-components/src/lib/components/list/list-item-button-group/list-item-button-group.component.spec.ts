import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemButtonGroupComponent } from './list-item-button-group.component';

describe('ListItemButtonGroupComponent', () => {
  let component: ListItemButtonGroupComponent;
  let fixture: ComponentFixture<ListItemButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
