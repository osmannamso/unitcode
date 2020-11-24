import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LayoutComponent} from './components/layout/layout.component';
import {GameComponent} from './components/game/game.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'games', pathMatch: 'full'
  },
  {
    path: 'games', component: LayoutComponent,
    children: [
      {path: 'tic-tac-toe', component: GameComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
