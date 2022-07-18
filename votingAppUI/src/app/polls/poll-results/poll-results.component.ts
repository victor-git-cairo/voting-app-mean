import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.css']
})
// total of votes from all the polls
// this will be converted to a chart later. a new component
export class PollResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
