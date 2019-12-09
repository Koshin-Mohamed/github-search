import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  find: string;
  
  @Output() getName = new EventEmitter<any>()
  @Output() getRepo = new EventEmitter<any>()

  gUsers() {
    this.getName.emit(this.find);
  }

  gRepos() {
    this.getRepo.emit(this.find);
  }

  constructor() {}

  ngOnInit() {}
}
