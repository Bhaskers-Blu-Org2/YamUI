/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
export enum ButtonColor {
  /**
   * Primary blue. Only one primary action should be offered at one time.
   */
  PRIMARY = 'primary',
  /**
   * Most buttons should be secondary if multiple actions are offered.
   */
  SECONDARY = 'secondary',
}

export enum ButtonStatus {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
  LOADING = 'loading',
}

export enum ButtonIconPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum ButtonSize {
  REGULAR = 'regular',
  SMALL = 'small',
}

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}
