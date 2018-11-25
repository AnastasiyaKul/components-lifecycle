import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ts',
  templateUrl: './ts.component.html',
  styleUrls: ['./ts.component.css']
})
export class TsComponent implements OnInit {

  constructor() { }
  countTs = 0;

  ngOnInit() {
  }

  @Input() name;
  @Output() onChangeTs = new EventEmitter();

  increment(): void {
    this.countTs++;
    this.onChangeTs.emit(this.countTs);
  }

  decrement(): void {
    if (this.countTs > 0) {
      this.countTs--;
    }
    this.onChangeTs.emit(this.countTs);
  }

}
