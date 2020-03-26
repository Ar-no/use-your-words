import { Component, OnInit } from '@angular/core';
import { PartyService } from './party.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {
  public code:any;

  constructor(private partyService:PartyService) { }

  ngOnInit(): void {
    this.partyService.getNewCode().subscribe(response => {
      this.code = response.code;
    });
  }

}
