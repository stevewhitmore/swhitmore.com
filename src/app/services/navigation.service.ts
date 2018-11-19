import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  smoothScroll(event) {
    let target, goToId, goToElement;
    
    event.preventDefault();
    target = event.target.nodeName !== 'A' ? event.target.closest('a') : event.target;
    goToId = target.attributes['href'].value;
    goToElement = document.querySelector(goToId);
    goToElement.scrollIntoView({behavior:'smooth', block:'start', inline:'start'});
  }
}
