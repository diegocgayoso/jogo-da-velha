import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Result } from '../../shared/models/iMarvel';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  @Input() characterDetails!: Result;

}
