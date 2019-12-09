import { SearchServiceService } from './../search-service.service';

import { Repository } from "./../repository";
import { Component, OnInit } from "@angular/core";
import { Username } from "./../username";

@Component({
  selector: "app-display-user",
  templateUrl: "./display-user.component.html",
  styleUrls: ["./display-user.component.css"]
})
export class DisplayUserComponent implements OnInit {
  username: Username;
  repositories:Repository[]=[];

  constructor(public service: SearchServiceService) {}

  ngOnInit() {
    this.findUser("Koshin-Mohamed");
    this.findRepo("Koshin-Mohamed")
  }

  findUser(find){
    this.service.findUser(find).then(
      (success)=>{
        this.username=this.service.username;
        console.log(this.username)
      },
      (error)=>{
        alert("error")
      } 
    );
  }
  
  findRepo(find){
      this.service.findRepos(find).then(
        (success)=>{
          this.repositories=this.service.Repositories;
          console.log(this.repositories)
        }
      )
  }
  


}
