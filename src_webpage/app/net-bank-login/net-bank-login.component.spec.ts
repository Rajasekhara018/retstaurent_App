import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetBankLoginComponent } from './net-bank-login.component';

describe('NetBankLoginComponent', () => {
  let component: NetBankLoginComponent;
  let fixture: ComponentFixture<NetBankLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetBankLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetBankLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
