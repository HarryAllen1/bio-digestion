import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../environments/environment";
import { provideStorage, getStorage } from "@angular/fire/storage";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  DigestiveImageComponent,
  InfoDialogComponent,
} from "./digestive-image/digestive-image.component";

import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DigestionComparisonComponent } from "./digestion-comparison/digestion-comparison.component";
import { ExplanationComponent } from "./explanation/explanation.component";

import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    DigestiveImageComponent,
    InfoDialogComponent,
    DigestionComparisonComponent,
    ExplanationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
