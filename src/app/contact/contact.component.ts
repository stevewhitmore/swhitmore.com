import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../services';
import { DataService } from '../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  testimonials: any;
  dataSubscription: Subscription

  constructor(private dataService: DataService,
              private navigationService: NavigationService) {}

  ngOnInit() {
    this.getTestimonials();
  }

  getTestimonials() {
    this.dataService.getTestimonials()
      .subscribe(data => this.testimonials = data);
  }

  smoothScroll(event) {
    this.navigationService.smoothScroll(event);
  }

  onView({ target, visible }: { target: Element; visible: boolean }) {
    this.navigationService.toggleActiveClass({target, visible});
  }

  ngOnDestroy() {
    if (this.dataSubscription) this.dataSubscription.unsubscribe();
  }

}
