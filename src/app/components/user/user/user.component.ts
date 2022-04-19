import { Component, OnInit } from '@angular/core';
import { UserFetchService } from '../../../services/user-fetch.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  magnify: string = 'assets/search(1).png';
  followersImage: string = 'assets/followers(1).png'
  active: boolean = false;
  name: any;
  login: any; 
  avatar: any;
  link: any;
  bio: any;
  followers: any;
  following: any;
  date: any;
  repos: any;
  constructor(private userFetch: UserFetchService) { }

  ngOnInit() {
    this.name = 'Paul Simel';
    this.login= 'simelpaul'; 
    this.avatar= 'https://avatars.githubusercontent.com/u/91665064?s=400&u=0f700ee7041025e9329e0546bab148f2b243adf9&v=4';
    this.link= 'https://github.com/simelpaul';
    this.bio= 'Aspiring FullStack Developer  ';
    this.followers= 2;
    this.following= 2;
    this.date= '2020-05-12T10:11:39Z';
  }
  searchUser(e: any,username: string){
    if(username === ''){
      alert("Enter a username")
    }else{    
    this.active = true;
    this.userFetch.userFetch(username);
    this.name = this.userFetch.name;
    this.login = this.userFetch.login;
    this.avatar = this.userFetch.avatar;
    this.link = this.userFetch.link;
    this.bio = this.userFetch.bio;
    this.followers = this.userFetch.followers;
    this.following = this.userFetch.following;
    this.date = this.userFetch.date;
    //Repos from service
    this.userFetch.repoFetch(username);
    this.repos = this.userFetch.repos;
    }
    
    e.preventDefault();

  }
}