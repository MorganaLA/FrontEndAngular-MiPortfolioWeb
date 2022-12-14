import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  private strUrlApi:string;
  

  constructor(private http:HttpClient, private router:Router) {

    this.strUrlApi = '/assets/data/user.json';
   }

   public loginSimple(email: string, pwd: string): void {

    this.http.get(this.strUrlApi).subscribe(
      (response: any) => {
        if(response.token != null) {
          
          localStorage.setItem('token', response.token);
          this.router.navigate(['']);
        }
      }
    );
   }

   public logout(): void {

    localStorage.removeItem('token');
    
    this.router.navigate(['/']);
   }

   public isUserLogIn(): boolean {
    return (localStorage.getItem('token') !== null);
   }
}
