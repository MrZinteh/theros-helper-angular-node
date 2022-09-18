import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value!;
    }

    public get isLoggedIn(): boolean {
      if (this.currentUserSubject.value !== null) {
        return this.currentUserValue.username !== ""
      }
      else {
        return false
      }
    }

    login(username: string, password: string): Observable<any> {
        if (username === environment.username && password == environment.password) { 
          const user: User = { username: username, password: "********" }
          localStorage.setItem('currentUser',JSON.stringify(user) );
          return of(user);
        }
        return of<void>();
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next({username: '', password: ''});
    }
}
