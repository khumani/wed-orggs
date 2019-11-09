import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name;
    email;
    password;
    City;
    address;
    

    constructor(private us:UsersService) { }
  
    ngOnInit() {
    }
    addData() {
      if(this.password.length<10){
        alert('Password Must be atleast 10 Characters long');
      }
      else
      {
        this.us.register(this.name,this.address,this.City,this.password,this.email);
        alert('Registeration Complete');
      }
      console.log(this.password.length)
      // alert(this.password.lenght);
      // console.log(this.name)
  }
  
  }