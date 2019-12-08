import { SearchServiceService } from './../search-service.service';
import { Repository } from './../repository';
import { Component, OnInit } from '@angular/core';
import { Username } from './../username';


@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  username : Username;

  public myProfile = 'Koshin-Mohamed';
  public ghUser: string;

  repository : Repository;

  public checkRepo: string;
  public reposDisplayed = 10;

  searchUser(username) {
    this.ghUser = '';
    this.myProfile  = username;
    this.ngOnInit();
}


  constructor(public ghUserRequest:SearchServiceService, public userRepos: SearchServiceService) {
   }

  ngOnInit() {

    this.ghUserRequest.getUser(this.myProfile);
      this.username = this.ghUserRequest.username;
      this.userRepos.ghUserRepos(this.myProfile);
      console.log(this.userRepos);
  }

  searchRepos() {
    this.checkRepo = '';
    this.reposDisplayed = 10;

}
}
