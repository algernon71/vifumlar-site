import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
export interface RSSResponse {
	episodes: RSSEpisode[];
}

export interface RSSEpisode {
	id: number;

	podcast_id: number;
	title: string ;
	subtitle: string | null;
	description: string;
	itunes_duration: number;
	itunes_episode: number | null;
	itunes_season: number | null;
	guid: string;
	timestamp_created: string;
	timestamp_updated: string;
	episode_asset: string;
}
@Injectable({
	providedIn: 'root'
})
export class EpisodeService {
	rssUrl = "https://apollo.rss.com/podcasts/fummelsondqg/episodes";
	 constructor(private http: HttpClient) { }
	 
	getEpisodes(): Observable<RSSEpisode[]> {
		 return this.http.get<RSSEpisode[]>('assets/episodes.json');
	}
	
	
}
