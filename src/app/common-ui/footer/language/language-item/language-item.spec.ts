import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageItem } from './language-item';

describe('LanguageItem', () => {
  let component: LanguageItem;
  let fixture: ComponentFixture<LanguageItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
