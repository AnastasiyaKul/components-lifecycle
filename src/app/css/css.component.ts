import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  constructor() { }
  @Input() name: string;
  @Output() onChangeCss = new EventEmitter();
  countCss = 0;

  ngOnInit() {
  }

  increment(): void {
    this.countCss++;
    this.onChangeCss.emit(this.countCss);
  }

  decrement(): void {
    if (this.countCss > 0) {
      this.countCss--;
    }
    this.onChangeCss.emit(this.countCss);
  }
}
