import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: { 'ngSkipHydration': '' } 
})
export class AppComponent {
  title = 'Pc';
}
