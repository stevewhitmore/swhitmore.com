import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService, NavigationService } from '../services';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  projects: any;
  selectedProject: any;
  viewSingleProject = false;
  dataSubscription: Subscription;

  constructor(private dataService: DataService,
              private navigationService: NavigationService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.dataService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  loadProject(project) {
    event.preventDefault();
    this.toggleViewSingleProject();
    this.selectedProject = this.projects.find(p => p.id === project);
  }

  toggleViewSingleProject() {
    this.viewSingleProject = !this.viewSingleProject;
  }

  onView({ target, visible }: { target: Element; visible: boolean }) {
    this.navigationService.toggleActiveClass({target, visible});
  }

  ngOnDestroy() {
    if (this.dataSubscription) this.dataSubscription.unsubscribe();
  }

}
