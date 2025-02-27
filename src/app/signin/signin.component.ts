import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { HttpClient, HttpClientModule } from '@angular/common/http'; // For HTTP requests
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  isSignUp: boolean = false; 
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient, private router: Router,private authService: AuthService) {}

  toggleMode() {
    this.isSignUp = !this.isSignUp;
    this.errorMessage = '';
    this.successMessage = '';
  }

  onSubmit() {
    const user = { email: this.email, password: this.password };

    if (this.isSignUp) {
      
      this.http.post('https://672af77f976a834dd0250ab3.mockapi.io/authentication', user)
        .subscribe({
          next: (response) => {
            this.successMessage = 'Successfully signed up';
            this.isSignUp = false; 
          },
          error: (error) => {
            console.error('Sign-Up Error:', error);
            this.errorMessage = 'Sign-Up failed. Please try again.';
          }
        });
    } else {
     
      this.http.get<any[]>('https://672af77f976a834dd0250ab3.mockapi.io/authentication')
        .subscribe({
          next: (users) => {
            const userExists = users.find(
              user => user.email === this.email && user.password === this.password
            );
            if (userExists) {
              this.router.navigate(['/home']); 
            } else {
              this.errorMessage = 'Invalid user details';
            }
          },
          error: (error) => {
            console.error('Sign-In Error:', error);
            this.errorMessage = 'Sign-In failed. Please try again.';
          }
        });
    }
  }
}
