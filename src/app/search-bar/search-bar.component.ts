import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Search } from '../search';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

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
