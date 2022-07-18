import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PollService } from '../../shared/poll-service.service';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})

// list all the polls
export class PollListComponent implements OnInit {
  pollSites!: any;
  subcription!: any;

  constructor(public pollService: PollService) { }

  ngOnInit(): void{
    this.pollService.getPolls().subscribe((response: any) => {
      console.log(response);
      this.pollSites = response
    });
  }
}