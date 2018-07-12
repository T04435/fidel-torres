import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isMenuShowing: boolean;
  @Output() onToggleMenuShowing = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleMenuShowing() {
    this.onToggleMenuShowing.emit();
  }

}
