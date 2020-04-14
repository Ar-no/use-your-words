import { Component, OnInit } from '@angular/core';
import { PartyService, CodeResponse } from '../party.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public code: string;

  constructor(private partyService:PartyService) { }

  ngOnInit(): void {
    this.partyService.getNewCode().subscribe((data: CodeResponse) => {
      this.code = data.code;
    });
  }
}
