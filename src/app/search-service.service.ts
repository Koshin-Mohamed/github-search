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
  Repositories:Repository[]=[];

  constructor(private http: HttpClient) {
    this.username = new Username("", "", "","", 0, new Date());
    // this.Repositories = new Repository("", "", "", new Date());
  }

  findUser(find:string) {
    interface ApiResponse {
      name: string;
      avatar_url: string;
      login: string;
      html_url: string;
      public_repos: number;
      created_at: Date;
    }
  
    let searchTerm='https://api.github.com/users/' + find + '?access_token=' + environment.apiKey;
    let promise = new Promise((resolve,reject) => {
      this.http.get<ApiResponse>(searchTerm).toPromise().then(
        (getResponse)=>{
          this.username=getResponse;
          resolve();
        },(error)=>{
          console.log('error')
          reject()
        }
      )
    })
    return promise;
  }


  findRepos(find:string) {
    interface ApiResponse {
      name: string;
      description: string;
      html_url: string;
      created_at: Date;
    }


    const myPromise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse[]>('https://api.github.com/users/' + find + '/repos?access_token=' + environment.apiKey).toPromise().then(
        (getRepoResponse) => {
          this.Repositories=[];
          for(let i = 0;i<getRepoResponse.length;i++){
          var repo =new Repository(getRepoResponse[i].name,getRepoResponse[i].description, getRepoResponse[i].html_url, getRepoResponse[i].created_at)
          this.Repositories.push(repo);

          }
            resolve();
        }, error => {
          reject(error);
        });
    });
    return myPromise;
  }

// gitRepos(searchName) {
//   console.log("here i am "+searchName)
//   interface ApiResponse {
//       items: any;
//   }

//   const promise = new Promise((resolve, reject) => {
//       this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + ' &per_page=10 ' + environment.apiKey).toPromise().then(getRepoResponse => {
//           this.searchRepo = getRepoResponse.items;
//           console.log(this.searchRepo)
//           resolve();
//       }, error => {
//           this.searchRepo = 'error';
//           reject(error);
//       });
//   });
//   return promise;
// }
}
