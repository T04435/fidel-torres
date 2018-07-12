import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from '../store';
import {Store} from '@ngrx/store';
import {selectMenuOpen} from '../store/selectors/ui.selector';
import {ToggleMenu} from '../store/actions/ui.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isMenuOpen$: Observable<boolean>;
  showToggleMenu: boolean;

  constructor(private store: Store<AppState>) {
    this.isMenuOpen$ = store.select(selectMenuOpen);
  }

  ngOnInit(): void {
    this.showToggleMenu = false;
  }

  handleToggleMenuShowing() {
    this.store.dispatch(new ToggleMenu());
  }

}
