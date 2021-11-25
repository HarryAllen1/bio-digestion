import { Component } from '@angular/core';
import { SelectorService } from '../selector.service';

@Component({
  selector: 'app-digestive-image',
  templateUrl: './digestive-image.component.html',
  styleUrls: ['./digestive-image.component.scss'],
})
export class DigestiveImageComponent {
  constructor(public selector: SelectorService) {}
  log = console.log;
}

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styles: [''],
})
export class InfoDialogComponent {
  constructor() {}
}
