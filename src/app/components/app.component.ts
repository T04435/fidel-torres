import {Component} from '@angular/core';
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
export class AppComponent {
  title = 'Fidel T04435';

  isMenuOpen$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isMenuOpen$ = store.select(selectMenuOpen);
  }

  handleToggleMenuShowing() {
    this.store.dispatch(new ToggleMenu());
  }
}
