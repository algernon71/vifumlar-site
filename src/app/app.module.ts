import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon';

import {MatTableModule} from '@angular/material/table';
import { EpisodeComponent } from './episode/episode.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { MapComponent } from './map/map.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { PodInfoComponent } from './pod-info/pod-info.component';
@NgModule({
  declarations: [
    AppComponent,
    EpisodeComponent,
    EpisodeListComponent,
    CharacterComponent,
    CharacterListComponent,
    MapComponent,
    InfoSectionComponent,
    PodInfoComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
