import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindComponent } from './mind.component';

describe('MindComponent', () => {
  let component: MindComponent;
  let fixture: ComponentFixture<MindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
