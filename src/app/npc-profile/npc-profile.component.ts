import { Component, OnInit } from '@angular/core';
import { NpcDataService } from '../npc-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-npc-profile',
  templateUrl: './npc-profile.component.html',
  styleUrls: ['./npc-profile.component.css']
})
export class NpcProfileComponent implements OnInit {
  npc: any = {
      firstName: '',
      lastName: '',
      age: '',
      occupation: '',
      background: '',
      avatarUrl: 'https://via.placeholder.com/150'  // une image placeholder
  };

  constructor(private npcDataService: NpcDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
          this.npcDataService.getNpc(id).subscribe(data => {
              this.npc = data;
          });
      }
  }
}
