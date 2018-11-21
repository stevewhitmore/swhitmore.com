import { Component, OnInit } from '@angular/core';
import { NavigationService, DataService } from '../services';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skillsSub: Subscription;
  skills: any;
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
    this.dataService.getSkills().subscribe(data => {
      this.skills = data;
      console.log(this.skills);
    })
  }

  smoothScroll(event) {
    this.navigationService.smoothScroll(event);
  }

  expandSection(btn) {
    btn.parentElement.classList.toggle('expanded');        
  }

  ngOnDestroy() {
    if (this.skillsSub) this.skillsSub.unsubscribe();
  }

}
