import { Component, Input } from '@angular/core';
import { IResource } from '../../utils/types';

@Component({
  selector: 'app-resource-card',
  imports: [],
  templateUrl: './resource-card.component.html',
  styleUrl: './resource-card.component.scss'
})
export class ResourceCardComponent {
  @Input() resource!: IResource;
}
