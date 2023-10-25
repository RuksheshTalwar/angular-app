import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Angular will identify it as CSS selector whenever it sees in index.html file like app-root
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title='app';
}
