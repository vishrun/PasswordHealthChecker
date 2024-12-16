import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  password: string = '';

  TestStrength()
  {
    const lengthRegex = /.{8,}/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;

    const isValidLength = lengthRegex.test(this.password)
    const hasLowerCase = lowercaseRegex.test(this.password)
    const hasUpperCase = uppercaseRegex.test(this.password)
    const hasDigit = digitRegex.test(this.password)

    if( isValidLength &&  hasLowerCase && hasUpperCase && hasDigit )
    {
      alert("Strong Password. Kudos!")
    }
    else if(!isValidLength)
    {
      alert("Weak Password. Make your passwords longer than 8 characters")
    }
    else{
      alert("Medium Strength. Make sure you have atleast one Uppercase, lowercase and digit character")
    }
  }
}
