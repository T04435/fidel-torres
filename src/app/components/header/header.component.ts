import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShowingMenu: boolean;

  constructor() { }

  ngOnInit() {
    this.isShowingMenu = true;
  }

  toogleMenu() {
    this.isShowingMenu = !this.isShowingMenu;
  }

}
