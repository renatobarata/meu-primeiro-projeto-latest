import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { NewComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [NewComponent, AsyncPipe],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {

  public isTrue = false;

  public loadingData$: Observable<string[]> = of([
      'item 1',
      'item 2',
      'item 3'
    ]).pipe(delay(3000));
}
