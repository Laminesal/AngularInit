import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // permet de definir un selector
  templateUrl: './app.component.html', // pour la vue
  styleUrls: ['./app.component.scss']
})
export class AppComponent { // permet de les exporter dans d'autres composante
  title = 'app';
}
