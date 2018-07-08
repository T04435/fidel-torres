import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuShowing: boolean;

  constructor() { }

  ngOnInit() {
    this.isMenuShowing = false;
  }

  toogleMenu() {
    this.isMenuShowing = !this.isMenuShowing;
  }

}
