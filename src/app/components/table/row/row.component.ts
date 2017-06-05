import {Component, OnInit, Input} from '@angular/core';
import {Player} from "../../../interfaces/player.interface";

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent {
  @Input('player')player: Player;
  @Input('index') index: number;
}
