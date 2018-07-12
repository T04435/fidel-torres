import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {UiActions, UiActionTypes} from '../actions/ui.actions';
import {createFeatureSelector} from '@ngrx/store';


export interface WebsiteUi {
  id: number;
}

export interface UiState extends EntityState<WebsiteUi> {
  isMenuOpen: boolean;
}

export const websiteUiAdapter: EntityAdapter<WebsiteUi> = createEntityAdapter<WebsiteUi>({});

export const initialState: UiState = websiteUiAdapter.getInitialState(
  {
    isMenuOpen: false
  }
);

export function reducer(state = initialState, action: UiActions): UiState {
  switch (action.type) {
    case UiActionTypes.ToggleMenu: {
      return Object.assign({}, state, {
        isMenuOpen: !state.isMenuOpen
      });
    }
    default: {
      return state;
    }
  }
}

export const selectUiState = createFeatureSelector<UiState>('ui');
export const selectMenuState = (state: UiState) => state.isMenuOpen;
