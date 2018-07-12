import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isMenuShowing: boolean;
  @Output() onToggleMenuShowing = new EventEmitter();

  showToggleMenu: boolean;
  constructor() { }

  ngOnInit() {
  }

  toggleMenuShowing() {
    this.onToggleMenuShowing.emit();
  }

  @HostListener('window:scroll', ['$event'])
  componentScroll(event) {
    // hide/show Menu Toggle based on 20% of scrolling
    if (window.pageYOffset * 100 / window.outerHeight >= 20) {
      this.showToggleMenu = true;
    } else {
      this.showToggleMenu = false;
    }
  }

}
