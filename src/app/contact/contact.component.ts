import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
declare const require: any;

const testimonials = require('../_in-memory-db/testimonials.json');

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  testimonials: any;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.getTestimonials()
      .subscribe(data => this.testimonials = data);      
  }

  getTestimonials() {
    return of(testimonials);
  }

  smoothScroll(event) {
    this.navigationService.smoothScroll(event);
  }

}
