import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-change-limit',
  templateUrl: './change-limit.component.html',
  styleUrls: ['./change-limit.component.scss']
})
export class ChangeLimitComponent {
  @Output('changer') changer: EventEmitter<number> = new EventEmitter();
  inputValue = 50;

  rowsLimitChange(limit: string){
    this.changer.emit(parseInt(limit));
  }
}
