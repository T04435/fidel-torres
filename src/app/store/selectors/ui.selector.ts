import {createSelector} from '@ngrx/store';
import * as UI from '../reducers/ui.reducer';

export const selectMenuOpen = createSelector(
  UI.selectUiState,
  UI.selectMenuState
);
