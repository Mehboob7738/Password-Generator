import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length = 0;
  password: string = '';

  onChangeLength(value: string){

    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
      console.log(`Text Value ${parsedValue}`);
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters);
  }

  onChangeUseNumber(){
    this.includeNumbers = !this.includeNumbers;
    console.log(this.includeNumbers);

  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
    console.log(this.includeSymbols);
  }

  onSubmit(){
    console.log(`Entered Length is ${this.length}`);
    console.log(`Use Letters: `+this.includeLetters);

    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()+';

    let validChars = '';

    if(this.includeLetters){
      validChars += letters;
    }

    if(this.includeNumbers){
      validChars += numbers;
    }

    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
