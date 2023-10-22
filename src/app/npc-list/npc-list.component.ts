import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { NpcDataService } from '../npc-data.service';
import { Router } from '@angular/router';


interface Npc {
  id: number; // ou string, selon le type de votre id
  firstName: string;
  lastName: string;
  occupation: string;
  // ... autres propriétés
}

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.css']
})
export class NpcListComponent implements OnInit {
  npcs: Npc[] = [];
  filteredNpcList: Npc[] = this.npcs;
  searchControl = new FormControl();

  constructor(private npcDataService: NpcDataService, private router: Router) { }

  ngOnInit(): void {
    this.npcDataService.getNpcs().subscribe(
      data => {
        this.npcs = data;
        this.filteredNpcList = [...this.npcs];  // Initialise filteredNpcList
      },
      error => console.error(error)
    );

    this.searchControl.valueChanges.pipe(
      debounceTime(300)  // Attend 300 ms après la dernière modification
    ).subscribe(query => this.onSearch(query));
  }

  onSearch(query: string): void {
    const lowerCaseQuery = query.toLowerCase();
    this.filteredNpcList = this.npcs.filter(
      npc => npc.firstName.toLowerCase().includes(lowerCaseQuery) ||
             npc.lastName.toLowerCase().includes(lowerCaseQuery) ||
             npc.occupation.toLowerCase().includes(lowerCaseQuery)
    );
  }

  viewProfile(npc: Npc): void {
    this.router.navigate(['/npc', npc.id]);
  }
  
}
