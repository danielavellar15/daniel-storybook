import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAdminLayoutPageComponent } from './default-admin-layout-page.component';

describe('DefaultAdminLayoutPageComponent', () => {
  let component: DefaultAdminLayoutPageComponent;
  let fixture: ComponentFixture<DefaultAdminLayoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultAdminLayoutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultAdminLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
