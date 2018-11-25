import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JSComponent implements OnInit {

  constructor() { }
  countJs = 0;

  ngOnInit() {
  }

  @Input() name;
  @Output() onChangeJs = new EventEmitter();

  increment(): void {
    this.countJs++;
    this.onChangeJs.emit(this.countJs);
  }

  decrement(): void {
    if (this.countJs > 0) {
      this.countJs--;
    }
    this.onChangeJs.emit(this.countJs);
  }

}
