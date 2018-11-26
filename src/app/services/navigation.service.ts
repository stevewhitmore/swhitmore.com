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

  toggleActiveClass(sectionObject) {
    const navbarRegistry = document.querySelectorAll('nav li a');
    const oldActive = document.querySelector('nav li.active');    
    const targetElement = sectionObject.target.id;

    if (sectionObject.visible) {
    
      Array.from(navbarRegistry, l => {
        l.parentElement.classList.remove('active');
        
        if (l.attributes['href'].value === '#' + targetElement) {
          l.parentElement.classList.add('active');
        } else {
          l.parentElement.classList.remove('active');
        }

      })
    }
    
  }
}
