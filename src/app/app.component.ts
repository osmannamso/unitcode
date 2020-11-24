import { Component } from '@angular/core';
import {GAME_CHECK_LINES} from '../values/variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentTurn: 'x' | 'o' = 'x';
  desk = [['', '', ''], ['', '', ''], ['', '', '']];
  gameCheckLines = GAME_CHECK_LINES;

  setMark(x, y): void {
    if (!this.desk[x][y]) {
      this.desk[x][y] = this.currentTurn;
      this.currentTurn = this.currentTurn === 'x' ? 'o' : 'x';
      if (this.gameCheck()) {
        this.clearDesk();
      }
    }
  }

  clearDesk(): void {
    this.currentTurn = 'x';
    this.desk = [['', '', ''], ['', '', ''], ['', '', '']];
  }

  gameCheck(): boolean {
    let finish = false;

    this.gameCheckLines.forEach((probables) => {
      let crossed = true;
      const startedMark = this.desk[probables[0][0]][probables[0][1]];

      if (startedMark && !finish) {
        probables.forEach((item) => {
          if (!this.desk[item[0]][item[1]] || this.desk[item[0]][item[1]] !== startedMark) {
            crossed = false;
          }
        });

        finish = crossed;
      }
    });

    return finish;
  }
}
