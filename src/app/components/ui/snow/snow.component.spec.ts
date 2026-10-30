import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowComponent } from './snow.component';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: () => void | Promise<void>) => void;
declare const it: (description: string, testFn: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => { toBeTruthy(): void };

describe('SnowComponent', () => {
  let component: SnowComponent;
  let fixture: ComponentFixture<SnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
