import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectorService {
  constructor() {}

  private _selected: string | null = null;

  get selected() {
    return this._selected;
  }

  set selected(value: string | null) {
    this._selected = value;
  }
}
