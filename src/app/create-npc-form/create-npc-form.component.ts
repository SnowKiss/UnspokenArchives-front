import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service'; // Ajustez le chemin d'accès en fonction de votre structure de fichiers


@Component({
  selector: 'app-create-npc-form',
  templateUrl: './create-npc-form.component.html',
  styleUrls: ['./create-npc-form.component.css']
})
export class CreateNpcFormComponent {
  npcForm: FormGroup; // Déclarez seulement ici

  constructor(private apiService: ApiService) {
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
    this.apiService.createNpc(this.npcForm.value).subscribe(
      (response: any) => {
        console.log(response);
        // Autres manipulations de la réponse...
      },
      (error: any) => {
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


