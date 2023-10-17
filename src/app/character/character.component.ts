import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
	@Input()
	name?: string;
	@Input()
	image?: string;
	@Input()
	subtitle?: string;
	
	@Input()
	age?: string;
	
	@Input()
	seasons?: string;
}
