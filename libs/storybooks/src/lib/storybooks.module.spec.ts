import { async, TestBed } from '@angular/core/testing';
import { StorybooksModule } from './storybooks.module';

describe('StorybooksModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StorybooksModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StorybooksModule).toBeDefined();
  });
});
