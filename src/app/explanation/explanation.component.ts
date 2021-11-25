import { Component, Input } from '@angular/core';
import { SelectorService } from '../selector.service';

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss'],
})
export class ExplanationComponent {
  constructor(public selector: SelectorService) {}

  @Input() title!: string;
}
