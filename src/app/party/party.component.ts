import { Component, OnInit } from '@angular/core';
import { PartyService, CodeResponse} from './party.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {
  public code: string;

  constructor(private partyService:PartyService) { }

  ngOnInit(): void {
    
  }

}
