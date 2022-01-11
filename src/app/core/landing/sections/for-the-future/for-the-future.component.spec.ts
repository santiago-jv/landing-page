import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTheFutureComponent } from './for-the-future.component';

describe('ForTheFutureComponent', () => {
  let component: ForTheFutureComponent;
  let fixture: ComponentFixture<ForTheFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForTheFutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTheFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
