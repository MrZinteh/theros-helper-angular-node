import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {NamesComponent} from "./names/names.component";
import {ImportantNpcsComponent} from "./important-npcs/important-npcs.component";
import {PlayersComponent} from "./players/players.component";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: PlayersComponent },
  { path: 'Gods', loadChildren: () => import('./gods/gods-routing.module').then(m => m.GodsRoutingModule), canActivate: [AuthGuard] },
  { path: 'ImportantNPCs', component: ImportantNpcsComponent, canActivate: [AuthGuard] },
  { path: 'Players', component: PlayersComponent, canActivate: [AuthGuard] },
];

const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  // enableTracing: true
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, routingConfiguration)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
