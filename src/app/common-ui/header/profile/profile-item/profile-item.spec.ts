import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileItem } from './profile-item';

describe('UserItem', () => {
  let component: ProfileItem;
  let fixture: ComponentFixture<ProfileItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
