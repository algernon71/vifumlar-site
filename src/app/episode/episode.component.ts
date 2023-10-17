import { Component, Input } from '@angular/core';
import { RSSEpisode } from '../services/episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {
	@Input() 
	episode?: RSSEpisode;
	
}
