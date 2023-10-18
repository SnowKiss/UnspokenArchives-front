import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { NpcDataService } from '../npc-data.service';

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

  constructor(private npcDataService: NpcDataService) { }

  ngOnInit(): void {
    this.npcDataService.getNpcs().subscribe(
      data => this.npcs = data,
      error => console.error(error)
    );
  }

  onSearch(query: string): void {
    const lowerCaseQuery = query.toLowerCase();
    this.filteredNpcList = this.npcs.filter(
      npc => npc.firstName.toLowerCase().includes(lowerCaseQuery) ||
             npc.lastName.toLowerCase().includes(lowerCaseQuery) ||
             npc.occupation.toLowerCase().includes(lowerCaseQuery)
    );
  }
}
