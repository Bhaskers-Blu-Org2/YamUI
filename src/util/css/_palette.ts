/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

/**
 * Avoid accessing these variables directly in other files. Instead
 * use the mapped meaningful, contextual variable names in colors.ts.
 */

export interface ColorPalette {
  [name: string]: string;
}

export const colorPalette = {
  /* Blue */
  color__blue: '#2477c3',
  color__stream: '#e9eff8',
  color__pond: '#9ac3ff',
  color__lake: '#6c98d9',
  color__river: '#386cbb',
  color__bay: '#264f8c',
  color__ocean: '#19345d',

  /* Gray */
  color__white: '#fff',
  color__popRock: '#f3f5f8',
  color__altRock: '#edeff2',
  color__indieRock: '#dde0e6',
  color__punkRock: '#a8b0bd',
  color__heavyMetal: '#646d7a',
  color__deathMetal: '#495361',
  color__blackMetal: '#343A41',
  color__black: '#000',

  /* Yellow */
  color__sunrise: '#ffe7b8',
  color__noon: '#ffc56c',
  color__sunset: '#f8ae41',

  /* Red */
  color__angel: '#fb7f78',
  color__lestat: '#d1423b',
  color__dracula: '#9e3028',

  /* Green */
  color__leaf: '#84ca4b',
  color__tree: '#338323',
  color__forest: '#27641b',
};
