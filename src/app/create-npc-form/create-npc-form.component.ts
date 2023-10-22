import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NpcDataService } from '../npc-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-npc-form',
  templateUrl: './create-npc-form.component.html',
  styleUrls: ['./create-npc-form.component.css']
})
export class CreateNpcFormComponent {
  npcForm: FormGroup; 
  loading = false;

  constructor(private npcDataService: NpcDataService, private router: Router) {
    // Déplacez l'initialisation de npcForm dans le constructeur
    this.npcForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, this.integerValidator]), // Maintenant, integerValidator est déjà défini
      occupation: new FormControl('', [Validators.required]),  
      // Ajoutez d'autres champs selon les attributs que vous souhaitez pour vos PNJs
    });
  }

  onSubmit() {
    this.loading = true;

    this.npcDataService.createNpc(this.npcForm.value).subscribe(
      (response: any) => {
        this.loading = false;
        console.log(response);
        const createdNpcId = response.id;
        this.router.navigate([`/npc/${createdNpcId}`]);
      },
      (error: any) => {
        this.loading = false;
        console.error(error);
        // Gestion des erreurs...
      }
    );
  }
  

  get firstNameControl() {
    return this.npcForm.get('firstName') as FormControl;
  }

  get lastNameControl() {
    return this.npcForm.get('lastName') as FormControl;
  }

  get ageControl() {
    return this.npcForm.get('age') as FormControl;
  }

  get occupationControl() {
    return this.npcForm.get('occupation') as FormControl;
  }

  integerValidator = (control: FormControl): { [key: string]: boolean } | null => {
    // Vérifie si la valeur est un entier
    if (!Number.isInteger(Number(control.value))) {
      // Si ce n'est pas un entier, retournez un objet d'erreur
      return { 'notInteger': true };
    }
    // Si c'est un entier, retournez null signifiant qu'il n'y a pas d'erreur
    return null;
  }
  
  
}


