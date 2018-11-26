import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationService, DataService } from '../services';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Output() sectionVisibleEvent: EventEmitter<any> = new EventEmitter();  
  skillsSub: Subscription;
  skills: any;
  aboutText: any;
  highlights: any;

  constructor(private dataService: DataService,
              private navigationService: NavigationService) {}

  ngOnInit() {
    this.getAboutText();
    this.getSkills();
  }

  getAboutText() {
    this.dataService.getAboutText().subscribe(data => {
      this.aboutText = data;
      this.highlights = this.aboutText['highlights'];
    });
  }

  getSkills() {
    this.dataService.getSkills().subscribe(data => {
      this.skills = data;
    })
  }

  smoothScroll(event) {
    this.navigationService.smoothScroll(event);
  }

  expandSection(btn) {
    btn.parentElement.classList.toggle('expanded');        
  }

  onView({ target, visible }: { target: Element; visible: boolean }) {
    this.sectionVisibleEvent.emit({ target, visible });
    this.navigationService.toggleActiveClass({target, visible});
  }

  ngOnDestroy() {
    if (this.skillsSub) this.skillsSub.unsubscribe();
  }

}
