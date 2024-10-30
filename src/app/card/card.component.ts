import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input() title ='';
 @Input() imageUrl ='';
 @Input() username ='';
 @Input() content ='';

}
