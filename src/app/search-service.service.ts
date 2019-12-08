import { Injectable } from "@angular/core";
import { environment } from "./../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Username } from "./username";
import { Repository } from "./repository";

@Injectable({
  providedIn: "root"
})
export class SearchServiceService {
  username: Username;
  repository: Repository;
  newRepository: any;
  searchRepo: any;

  constructor(private http: HttpClient) {
    this.repository = new Repository("", "", "", new Date());
    this.username = new Username("", "", "", 0, "", new Date());
  }

  getUser(searchName) {
    interface ApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      public_repos: number;
      html_url: string;
      created_at: Date;
    }
  

  const promise = new Promise((resolve) => {
    this.http.get<ApiResponse>('https://api.github.com/users/' + searchName + '?access_token=' + environment.apiKey).toPromise().then(getResponse => {
        this.username.name = getResponse.name;
        this.username.login = getResponse.login;
        this.username.avatar_url = getResponse.avatar_url;
        this.username.public_repos = getResponse.public_repos;
        this.username.html_url = getResponse.html_url;
        this.username.created_at = getResponse.created_at;
        resolve();
    },);
});
return promise;

}


  ghUserRepos(myProfile) {
    interface ApiResponse {
      name: string;
      html_url: string;
      description: string;
      created_at: Date;
    }


const myPromise = new Promise((resolve, reject) => {
  this.http.get<ApiResponse>('https://api.github.com/users/' + myProfile + '/repos?order=created&sort=asc?access_token=' + environment.apiKey).toPromise().then(getRepoResponse => {
      this.newRepository = getRepoResponse;
      resolve();
  }, error => {
      reject(error);
  });
});
return myPromise;
}

gitRepos(searchName) {
  interface ApiResponse {
      items: any;
  }

  const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + ' &per_page=10 ' + environment.apiKey).toPromise().then(getRepoResponse => {
          this.searchRepo = getRepoResponse.items;

          resolve();
      }, error => {
          this.searchRepo = 'error';
          reject(error);
      });
  });
  return promise;
}
}
