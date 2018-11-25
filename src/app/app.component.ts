import {Component, Input} from '@angular/core';
import {CssComponent} from './css/css.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countCss = 0;
  countJs = 0;
  countTs = 0;

  getCountCss(countCss: number) {
    this.countCss = countCss;
  }

  getCountJs(countJs: number) {
    this.countJs = countJs;
  }

  getCountTs(countTs: number) {
    this.countTs = countTs;
  }
}
