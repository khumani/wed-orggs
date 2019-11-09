import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient , private router:Router) { }
        addData(name,address,city,Cost,image) {
        const obj = {name,address,city,Cost,image};
          this
          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
    }
    caddData(fname,taddress,acity,eemail) {
      const obj = {fname,taddress,acity,eemail};
        this
        .http
        .post(`${this.url}/cadd`, obj)
        .subscribe(res => console.log(res));
  }

    getData() {
      return(
      this
        .http
          .get(`${this.url}`)
      );
  }

  cgetData() {
    return(
    this
      .http
        .get(`${this.url}/cview`)
    );
}
  upData(id, name) {
    const obj = { id };
  this
      .http
      .post(`${this.url}/update/${id}`, obj)
      .subscribe(res => console.log(res));
}
delData(id) {
  return this.http.get(`${this.url}/delete/${id}`).subscribe();
}
editData(id) {
  return this
          .http
          .get(`${this.url}/edit/${id}`);
      }


    up_data(name,city, password,address,email, id) {

      const obj = {
          name: name,
          city: city,
          password: password,
          address:address,
          email:email
        };
        this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log('Done'));
        }

////register
// register(name,address,City,password,email) {
//   console.log(password);
//   let length = password.lenght;
//   console.log(length);
//     const obj = {name,address,City,password,email};
//     this
//         .http
//         .post(`${this.url}/addRegister`, obj)
//         .subscribe(res => console.log(res));

// }
register(name,address,city,password,email) {
  // console.log(password);
  // let length = password.lenght;
  // console.log(length);
    const obj = {name,address,city,password,email};
    this
        .http
        .post(`${this.url}/addRegister`, obj)
        .subscribe(res => console.log(res));
}
////login
// signIn(email,password){
//   const obj = {email, password};
//   console.log(obj);
//   this
//     .http
//     .post(`${this.url}/signIn`,obj)
//     .subscribe((res:any) => {
//       if(res.message){
//         alert(res.message);
//       }
//       else{

//         this.router.navigateByUrl(`/about`);
//       }
//     });
signIn(email,password){
  const obj = {email, password};
  console.log(obj);
  this
    .http
    .post(`${this.url}/signin`,obj)
    .subscribe((res:any) => {
      if(res.message){
        alert(res.message);
      }
      else{

        this.router.navigateByUrl(`/about`);
      }
    });
}
}
