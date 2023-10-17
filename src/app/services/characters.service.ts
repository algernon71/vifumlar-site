import { Injectable } from '@angular/core';

export class Character {
	name?: string;
	subtitle?: string;
	description?: string;
	
}
@Injectable({
	providedIn: 'root'
})
export class CharactersService {
	

	rssUrl = "https://apollo.rss.com/podcasts/fummelsondqg/episodes?limit=5&page=2";
	constructor() { }
}
