import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Player} from "../../interfaces/player.interface";
import { times } from 'lodash';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input('allPlayers') allPlayers: Player[];
  @Input('limit') limit: number;
  @Output('currentPage') currentPage: EventEmitter<number> = new EventEmitter();

  getPagesCount() {
    return times(Math.ceil(this.allPlayers.length / this.limit));
  }

  changePage(pageNumber: number) {
    this.currentPage.emit(pageNumber);
  }
}
