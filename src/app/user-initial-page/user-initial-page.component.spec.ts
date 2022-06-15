import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInitialPageComponent } from './user-initial-page.component';

describe('UserInitialPageComponent', () => {
  let component: UserInitialPageComponent;
  let fixture: ComponentFixture<UserInitialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInitialPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInitialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
