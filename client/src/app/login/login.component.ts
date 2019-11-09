import { Component, OnInit } from '@angular/core';
import{ UsersService} from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name;
  email;
  password;
  address;
  city;
  image;

  constructor(private us:UsersService) { }

  ngOnInit() {
    
  }
  signIn(){
    this.us.signIn(this.email,this.password);
    
  }
  
  // addData(){
  //   this.us.addData(this.name,this.email,this.address,this.password,this.city,this.image);
  //   if(this.password.length<10){
  //     alert('Password Must be atleast 10 Characters long');
  //   }
  //   else
  //   {
  //     this.us.register(this.name,this.address,this.city,this.password,this.email);
  //     alert('Registeration Complete');
  //   }
  //   console.log(this.password.length)
  //   // alert(this.password.lenght);
  //   // console.log(this.name)

  // }

}
