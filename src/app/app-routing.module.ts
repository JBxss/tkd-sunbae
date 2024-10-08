import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { BracketComponent } from './pages/bracket/bracket.component';
import { LoginComponent } from './pages/login/login.component';
import { InscripcionesComponent } from './pages/inscripciones/inscripciones.component';
import { TotalPeleadoresComponent } from './pages/total-peleadores/total-peleadores.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'brackets',
    component: BracketComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'inscripciones',
    component: InscripcionesComponent,
  },
  {
    path: 'peleadores',
    component: TotalPeleadoresComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
