import { Injectable } from '@angular/core';
import { of } from 'rxjs';

declare const require: any;

const aboutText = require('../_in-memory-db/about-text.json');
const skills = require('../_in-memory-db/about-skills.json');
const portfolio = require('../_in-memory-db/projects.json');
const testimonials = require('../_in-memory-db/testimonials.json');

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAboutText() {
    return of(aboutText);
  }

  getSkills() {
    return of(skills);
  }

  getProjects() {
    return of(portfolio);
  }

  getTestimonials() {
    return of(testimonials);
  }
}
