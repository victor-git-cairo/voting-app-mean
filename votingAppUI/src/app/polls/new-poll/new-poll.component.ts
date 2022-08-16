import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PollService } from 'src/app/shared/poll-service.service';
import { IPoll } from '../../shared/poll.model';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
// add a new from through a form in angular
// enhance the form to reactivelater
export class RegisterPollComponent implements OnInit {
  public pollInfo: IPoll = {
    siteNumber: 0,
    firstName: " ",
    lastName: " "    
  };

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
  }

  onSubmit(formInfo: NgForm) {
    // Assign the form data to interface variable
    this.pollInfo.siteNumber = formInfo.value.siteNumber;
    this.pollInfo.firstName = formInfo.value.firstName;
    this.pollInfo.lastName = formInfo.value.lastName;
    // votecount 
    
    //post data in db through the poll-service

    this.pollService.addAPoll(this.pollInfo).subscribe(()=> {

    }
   )

   
    
   

    
   
  }
  
}
