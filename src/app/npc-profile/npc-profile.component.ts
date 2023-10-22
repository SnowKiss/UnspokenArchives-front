import { Component, OnInit } from '@angular/core';
import { NpcDataService } from '../npc-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-npc-profile',
  templateUrl: './npc-profile.component.html',
  styleUrls: ['./npc-profile.component.css']
})
export class NpcProfileComponent implements OnInit {

  loading: boolean = false;

  npc: any = {
      firstName: '',
      lastName: '',
      age: '',
      birthDate: '',
      occupation: '',
      background: '',
      fileId: '',
      physicalDescription: '',
      psychologicalDescription: '',
      portrait: 'https://via.placeholder.com/150'  // une image placeholder
  };

  showModal: boolean = false;

  constructor(private npcDataService: NpcDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
          this.npcDataService.getNpc(id).subscribe(data => {
              this.npc = data;
          });
      }
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
      this.showModal = false;
  }

  regenerateNpcImage() {
      this.loading = true;  // Commencez le chargement
      const npcId = this.npc.id;
      this.npcDataService.regenerateImage(npcId).subscribe(
        (response: any) => {
          this.loading = false;
          console.log(response);
          const createdNpcImg = response.portrait;
          this.npc.portrait = createdNpcImg;
        },
        (error: any) => {
          this.loading = false;
          console.error(error);
          // Gestion des erreurs...
        }
        
      );
  }


}
