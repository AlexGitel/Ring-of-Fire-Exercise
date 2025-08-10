import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tasks-for-players',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './tasks-for-players.component.html',
  styleUrl: './tasks-for-players.component.scss'
})
export class TasksForPlayersComponent implements OnChanges {

  cardTasks = [
    { title: 'Waterfall', description: 'Alle trinken gleichzeitig. Der Spieler mit dem Ass hört zuerst auf, die anderen in Reihenfolge danach.' },
    { title: 'You', description: 'Du bestimmst jemanden, der trinken muss.' },
    { title: 'Me', description: 'Du selbst trinkst einen Schluck.' },
    { title: 'Floor', description: 'Alle müssen den Boden berühren – der Letzte trinkt.' },
    { title: 'Thumbmaster', description: 'Du kannst jederzeit deinen Daumen auf den Tisch legen. Wer als Letzter reagiert, trinkt.' },
    { title: 'For Chicks', description: 'Alle Frauen trinken.' },
    { title: 'Heaven', description: 'Zeig in den Himmel – wer’s verpennt, trinkt.' },
    { title: 'Mate', description: 'Wähle einen Mitspieler – ab jetzt müsst ihr immer gemeinsam trinken.' },
    { title: 'Rhyme', description: 'Sag ein Wort. Im Uhrzeigersinn muss jeder einen Reim sagen. Wer scheitert oder doppelt, trinkt.' },
    { title: 'Men', description: 'Alle Männer trinken.' },
    { title: 'Neue Regel', description: 'Erfinde eine Regel, die ab sofort gilt. Beispiel: „Nur mit links trinken“ oder „Niemand darf fluchen“.' },
    { title: 'Never have i ever...', description: 'Starte eine Runde „Ich hab noch nie…“ – wer etwas doch getan hat, trinkt.' },
    { title: 'Kingscup', description: 'Erster bis dritter König → schütte einen Schluck deines Drinks in den Kingscup. Vierter König → Du musst den gesamten Kingscup exen.' },
  ];

  title = '';
  description = '';

  @Input() card: string = '';

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card?.split('_')[1];
      this.title = this.cardTasks[cardNumber - 1].title;
      this.description = this.cardTasks[cardNumber - 1].description;
    }
  }
}
