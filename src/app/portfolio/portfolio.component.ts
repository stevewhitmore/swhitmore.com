import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services';


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

  constructor(private dataService: DataService) { }

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

  ngOnDestroy() {
    if (this.dataSubscription) this.dataSubscription.unsubscribe();
  }

}
