import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { HostListener} from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { NavigationService } from '../services/navigation.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  sticky: boolean = false;
  navBarPosition: any;
  @ViewChild('navbar') navbar: ElementRef;

  constructor(private navigationService: NavigationService) {}
  
  ngAfterViewInit(){
    this.navBarPosition = this.navbar.nativeElement.offsetTop
  }

  @HostListener("window:scroll", ['$event'])
  stickyNavOnScroll() {
    if(window.pageYOffset >= this.navBarPosition){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  smoothScroll(event) {
    this.navigationService.smoothScroll(event);
  }
}
