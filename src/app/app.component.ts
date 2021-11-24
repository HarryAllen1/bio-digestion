import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DigestionComparisonComponent } from './digestion-comparison/digestion-comparison.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openDigestionComparisonDialog(): void {
    this.dialog.open(DigestionComparisonComponent, {
      autoFocus: false,
    });
  }
  requestFullscreen(): void {
    document.body.requestFullscreen()
  }
}
