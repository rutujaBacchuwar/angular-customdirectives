import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1 my-error>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
