import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNpcFormComponent } from './create-npc-form/create-npc-form.component';
import { NpcProfileComponent } from './npc-profile/npc-profile.component';
import { NpcListComponent } from './npc-list/npc-list.component';


const routes: Routes = [
  { path: 'npc-list', component: NpcListComponent },
  { path: 'create-npc', component: CreateNpcFormComponent },
  { path: 'npc-profile', component: NpcProfileComponent },
  { path: 'npc/:id', component: NpcProfileComponent },
  { path: '',   redirectTo: '/create-npc', pathMatch: 'full' }, // redirige vers `create-npc` par défaut
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
