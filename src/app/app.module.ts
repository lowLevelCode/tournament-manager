import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';




import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ImportExcelComponent } from './import-excel/import-excel.component';
import { ShellComponent } from './shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TournamentComponent } from './routed/tournament/tournament.component';
import { MatchComponent } from './matches/match/match.component';
import { MatchListComponent } from './matches/match-list/match-list.component';

import { registerLocaleData } from '@angular/common';
import localeEsMx from '@angular/common/locales/es-MX'
import { FlexLayoutModule } from '@angular/flex-layout';

registerLocaleData(localeEsMx, 'es-MX');

@NgModule({
  declarations: [
    AppComponent,
    ImportExcelComponent,
    ShellComponent,
    TournamentComponent,
    MatchComponent,
    MatchListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FlexLayoutModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-MX' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
