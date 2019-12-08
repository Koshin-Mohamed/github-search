import { Search } from './../search';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  searchInfo = new Search('');
    @Output() getName = new EventEmitter<Search>();
    
    searchFor(data){
      this.getName.emit(data.value.find);
      console.log(data.value.find)
      data.reset();
    }
  
  constructor() { }

  ngOnInit() {
  }

}
