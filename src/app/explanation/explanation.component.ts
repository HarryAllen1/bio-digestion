import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss'],
})
export class ExplanationComponent {
  constructor() {}

  @Input() title!: string;
}
