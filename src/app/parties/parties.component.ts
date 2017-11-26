import { Component, OnInit } from '@angular/core';
import { PARTIES } from '../mock-parties';
import { Party } from '../party';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {

  selectedParty: Party;

  parties = PARTIES;

  constructor() { }

  ngOnInit() {
  }


  onSelect(party: Party): void {
    this.selectedParty = party;
  }

}
