import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueTicketComponent } from './queue-ticket.component';

describe('QueueTicketComponent', () => {
  let component: QueueTicketComponent;
  let fixture: ComponentFixture<QueueTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueueTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
