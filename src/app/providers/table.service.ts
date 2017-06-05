import {Injectable} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable, BehaviorSubject} from "rxjs";

import { reverse, sortBy } from 'lodash';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';
import {Player} from "../interfaces/player.interface";
import {SortBy} from "../enums/sort-by.enum";
import {SortHow} from "../enums/sort-how.enum";


@Injectable()
export class TableService {
  players: BehaviorSubject<Player[]> = new BehaviorSubject([]);
  sortBy: BehaviorSubject<SortBy> = new BehaviorSubject(SortBy.NAME);
  sortHow: BehaviorSubject<SortHow> = new BehaviorSubject(SortHow.DESC);
  private playersURL = 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers';

  constructor(private http: Http) {
    Observable.combineLatest(this.sortBy, this.sortHow).subscribe(() => this.getPlayers());
  }

  getPlayers() {
    const currentPlayers = this.players.getValue();
    let headers = new Headers({
      'x-mashape-key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'
    });

    if (currentPlayers.length === 0) {
      this.http.get(this.playersURL, {headers})
        .map(this.extractData)
        .map(scorers => this.sortScorers(scorers.topscorers))
        .catch(this.handleError)
        .subscribe(players => this.players.next(players));
    } else {
      this.players.next(this.sortScorers(currentPlayers));
    }
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private sortScorers (players) {
    const sortByInner = this.sortBy.getValue();
    const sortHow = this.sortHow.getValue();
    const sortedPlayers = sortBy(players, (player) => {
      return sortByInner === SortBy.GOALS ? parseInt(player[sortByInner], 10) : player[sortByInner];
    });

    if (sortHow === SortHow.DESC) {
      return reverse(sortedPlayers);
    }

    return sortedPlayers;
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}


