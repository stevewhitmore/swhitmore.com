import { Component, OnInit } from '@angular/core';
import { NavigationService, DataService } from '../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skills$: Observable<any>;
  aboutText$: Observable<any>;

  constructor(private dataService: DataService,
              private navigationService: NavigationService) {}

  ngOnInit() {
    this.getSkills();
  }

  getAboutUsText() {
    this.aboutText$ = this.dataService.getAboutText();
  }

  getSkills() {
    this.skills$ = this.dataService.getSkills();
  }

  smoothScroll(event) {
    this.navigationService.smoothScroll(event);
  }

  expandSection(btn) {
    btn.parentElement.classList.toggle('expanded');        
  }

}
