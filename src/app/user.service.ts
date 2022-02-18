import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repo } from './repo';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  gotUser:User;
  repos:Repo;

  constructor(private httpClient:HttpClient) {
    this.gotUser = new User('','','','',0,0,0,'', new Date,);
    this.repos = new Repo('','',0,0,'','',new Date);
  }
  getDetails(myname:string){
    interface getUserDetails{
      name:string;
      login:string; 
      html_url:string; 
      location:string; 
      following:number;
      followers:number; 
      public_repos:number; 
      avatar_url:string;
      created_at:Date;
    }
    let userDetails= 'https://api.github.com/users/' + myname + "?access_token'="+environment.accesstoken;
    let promise = new Promise<any>((resolve,reject)=>{this.httpClient.get<getUserDetails>(userDetails).toPromise().then
    ((response:any)=>{
      this.gotUser= response;
      resolve(response)
      
    },
    (error:any)=>{
      console.log('user not found')

      reject(error)
    })
    })
    return promise
  }

  getReDetails(myname:string){
    interface getRepoDetails{
      name:string;
      html_url:string; 
      fork_url:number;
      watching:number; 
      languages:string;
      description:string;
      created_at:Date;
    }
    let repoDetails ='https://api.github.com/users/'+myname+'/repos'+ "?access_token'="+environment.accesstoken;
    let promise = new Promise<any>((resolve,reject)=>{this.httpClient.get<getRepoDetails>(repoDetails).toPromise().then
      ((response:any)=>{
        this.repos= response;
        resolve(response)
        
      },
      (error:any)=>{
        console.log('user not found')
  
        reject(error)
      })
      })
      return promise
    }
  }

