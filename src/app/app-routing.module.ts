import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNpcFormComponent } from './create-npc-form/create-npc-form.component';
import { NpcProfileComponent } from './npc-profile/npc-profile.component';


const routes: Routes = [
  { path: 'create-npc', component: CreateNpcFormComponent },
  { path: 'npc-profile', component: NpcProfileComponent },
  { path: '',   redirectTo: '/create-npc', pathMatch: 'full' }, // redirige vers `create-npc` par défaut
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
