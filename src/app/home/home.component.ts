import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  }

  smoothScroll(event) {
    this.navigationService.smoothScroll(event);
  }

}
