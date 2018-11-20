import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: any;
  @Output() toggleProjectViewEvent: EventEmitter<any> = new EventEmitter();

  constructor(private carouselConfig: NgbCarouselConfig) { }

  ngOnInit() {
    this.carouselConfig.pauseOnHover = true;
    this.carouselConfig.showNavigationArrows = true;
    this.carouselConfig.showNavigationIndicators = true;
  }

  toggleProjectView() {
    this.toggleProjectViewEvent.emit(null);
  }

}
