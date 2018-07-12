import {Action} from '@ngrx/store';

export const UiActionTypes = {
  ToggleMenu: '[Ui] Toggle Menu'
};

export class ToggleMenu implements Action {
  type = UiActionTypes.ToggleMenu;
  constructor() {}
}

export type UiActions = ToggleMenu;
