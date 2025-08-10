import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GameObjects } from '../../models/game-objects';
import { PlayersComponent } from "../players/players.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { TasksForPlayersComponent } from '../tasks-for-players/tasks-for-players.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayersComponent, MatButtonModule, MatIconModule, TasksForPlayersComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game!: GameObjects;


  constructor(public dialog: MatDialog) {
    this.newGame();
  }

  newGame() {
    this.game = new GameObjects();
  }

  pickCard() {
    if (!this.pickCardAnimation) {

      this.currentCard = this.game.stack.pop() ?? '';
      this.pickCardAnimation = true;

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

      setTimeout(() => {
        this.ifCardPicked();
        this.pickCardAnimation = false;
      }, 1100);
    }
  }

  ifCardPicked() {
    if (this.currentCard) {
      this.game.playedCards.push(this.currentCard);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((playerName: string) => {
      if (playerName) {
        this.game.players.push(playerName);
      }
    });
  }
}