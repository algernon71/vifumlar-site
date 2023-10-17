import { Component } from '@angular/core';
import { RSSEpisode, EpisodeService } from '../services/episode.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent {
  episodes: RSSEpisode[] = [];
  
  constructor(private episodeService: EpisodeService) {
    this.load();
  }
  
  load() {
   	this.episodeService.getEpisodes().subscribe(data => {
       this.episodes = data;
       console.info('Got episodes:', this.episodes);
     }); 
  }

}
