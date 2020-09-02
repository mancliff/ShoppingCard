import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  imports: [

  ]

  pass= "user";
  user ="user";
   login(){

    let username = (<HTMLInputElement>document.getElementById("username")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;

  if(username == this.user && password == this.pass){

    alert("Welcome..!" + username);
    
    this.router.navigateByUrl('/cart');
    }
    else{
      alert("Incorrect login details");
    }
  }

}
