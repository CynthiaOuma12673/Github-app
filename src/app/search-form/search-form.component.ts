import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  public searchName:string= 'Enter Username here'
  @Output() searchResult = new EventEmitter<any>()
  constructor() {}

  searchUser(){
    this.searchResult.emit(this.searchName);

  }

  ngOnInit(): void {
  }

}
