import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Repo } from '../repo';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
      gotUser:any=User;
      repos:any;

  constructor(public userService:UserService) {
  }
  searchUser(myname:string){
    this.userService.getDetails(myname).then((success:any)=>{
      this.gotUser = this.userService.gotUser;
    },
    (error:any)=>{
      console.log('enter name')
    });
    this.userService.getReDetails(myname).then((success:any)=>{
      this.repos = this.userService.repos;
    },
    (error:any)=>{
      console.log('repo not found')
    }
    );
  }

  ngOnInit(): void {
    this.searchUser('CynthiaOuma12673');
  }

}
