import { async, TestBed } from '@angular/core/testing';
import { FeaturesTodosModule } from './features-todos.module';

describe('FeaturesTodosModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturesTodosModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturesTodosModule).toBeDefined();
  });
});
