import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from './../repository';
import { Username } from './../username';



@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
