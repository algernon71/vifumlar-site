import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
	@Input()
	status?: string;
	@Input()
	name?: string;
	@Input()
	image?: string;
	@Input()
	token?: string;
	@Input()
	subtitle?: string;
	
	@Input()
	starring?: string;
	@Input()
	age?: string;
	
	@Input()
	seasons?: string;
}
