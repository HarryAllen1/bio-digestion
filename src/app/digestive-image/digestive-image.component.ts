import { Component } from '@angular/core';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-digestive-image',
  templateUrl: './digestive-image.component.html',
  styleUrls: ['./digestive-image.component.scss'],
})
export class DigestiveImageComponent {
  constructor(private storage: Storage) {
    const imageRef = ref(storage, 'digestive system.png');
    this.downloadUrl$ = from(getDownloadURL(imageRef));
  }

  downloadUrl$: Observable<string>;
}

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styles: [''],
})
export class InfoDialogComponent {
  constructor() {}
}
