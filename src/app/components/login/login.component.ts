import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from 'src/app/services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginTxtEmail:string;
  public loginTxtPwd:string;

  constructor(private auth:AutorizacionService) {
    this.loginTxtEmail = "";
    this.loginTxtPwd = "";
   }

  ngOnInit(): void {
  }
public btnLogin(): void {
  console.log("Email: " +  this.loginTxtEmail);
  console.log("pwd: " +  this.loginTxtPwd);

  this.auth.loginSimple(this.loginTxtEmail, this.loginTxtPwd);
} 


}
