import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { LoadingService } from './services/loading.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class App {
  protected readonly title = signal('bpdemo');
  loading$ = null as any; // temporary placeholder

  constructor(private loadingService: LoadingService) {
    // Initialize loading$ here after loadingService exists
    this.loading$ = this.loadingService.loading$;
  }
}
