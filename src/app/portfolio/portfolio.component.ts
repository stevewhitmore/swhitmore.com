import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
declare const require: any;

const portfolio = require('../_in-memory-db/projects.json');

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: any;
  selectedProject: any;
  viewSingleProject = false;

  constructor() { }

  ngOnInit() {
    this.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  getProjects() {
    return of(portfolio);
  }

  loadProject(project) {
    event.preventDefault();
    this.toggleViewSingleProject();
    this.selectedProject = this.projects.find(p => p.id === project);
  }

  toggleViewSingleProject() {
    this.viewSingleProject = !this.viewSingleProject;
  }

}
