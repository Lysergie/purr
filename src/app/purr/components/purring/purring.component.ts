import { Component, Input } from '@angular/core';
import { Purring } from '../../store/purr.reducer';

@Component({
  selector: 'app-purring',
  templateUrl: './purring.component.html',
  styleUrls: ['./purring.component.scss']
})
export class PurringComponent {
  @Input() purring?: Purring;
}
