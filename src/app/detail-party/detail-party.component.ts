import { Component, OnInit, Input } from '@angular/core';
import { Party } from '../party';

@Component({
  selector: 'app-detail-party',
  templateUrl: './detail-party.component.html',
  styleUrls: ['./detail-party.component.css']
})
export class DetailPartyComponent implements OnInit {
  @Input() party: Party;

  constructor() { }

  ngOnInit() {
  }

}
