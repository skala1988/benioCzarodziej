import { Component, OnInit } from '@angular/core';
import {TableService} from "../../providers/table.service";
import {Player} from "../../interfaces/player.interface";
import {SortBy} from "../../enums/sort-by.enum";
import {SortHow} from "../../enums/sort-how.enum";
import { isUndefined } from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  currentPage: number = 0;
  limit: number = 50;
  allPlayers: Player[] = [];
  allPlayersSliced: Player[] = [];

  constructor(private tableService: TableService) { }

  changer(limit?: number) {
    const playersClone = this.allPlayers.slice();

    if(limit) {
      this.limit = limit;
    }

    const sliced = playersClone.slice(this.currentPage * this.limit, ((this.currentPage * this.limit) + this.limit));
    this.allPlayersSliced = sliced;
  }

  changeSort(sortBy: SortBy){
    const currentSortBy = this.tableService.sortBy.getValue();
    const currentSortHow = this.tableService.sortHow.getValue();

    if (currentSortBy === sortBy) {
      this.tableService.sortHow.next(currentSortHow === SortHow.ASC ? SortHow.DESC : SortHow.ASC)
    } else {
      this.tableService.sortBy.next(sortBy)
    }
  }

  changeCurrentPage(pageNumber: number) {
    if(!isUndefined(pageNumber)) {
      this.currentPage = pageNumber;
    }

    this.changer();
  }

  ngOnInit() {
    this.tableService.players.subscribe(playersData => {
      this.allPlayers = playersData;
      this.changer();
    });
  }
}
