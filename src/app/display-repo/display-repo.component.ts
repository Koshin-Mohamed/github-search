import { Repository } from './../repository';
import { SearchServiceService } from './../search-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-repo',
  templateUrl: './display-repo.component.html',
  styleUrls: ['./display-repo.component.css']
})
export class DisplayRepoComponent implements OnInit {

   repository: Repository;
    public checkRepo: string;
    public reposDisplayed = 12;

    searchRepos() {
        this.checkRepo = '';
        this.reposDisplayed = 10;
        this.getDataFunction();
    }
  constructor(public gitRepoRequest: SearchServiceService ) {}

  ngOnInit() {
    this.reposDisplayed = 5;
      this.gitRepoRequest.gitRepos(this.checkRepo);
  }


      getDataFunction() {
          this.gitRepoRequest.gitRepos(this.checkRepo);

      }

}
