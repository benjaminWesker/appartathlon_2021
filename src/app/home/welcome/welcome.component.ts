import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  isValid : boolean = false;
  password : string = "ours";
  readPassword : string = "Entrez le mot de passe afin d'établir la connexion... ";
  constructor() { }

  ngOnInit(): void {
  }

  onValid() : void{
    console.log(this.readPassword);
    if(this.password === this.readPassword){
      this.isValid = true;
    } else {
      this.isValid = false;
    }


  }

  onClick() : void {
    this.readPassword = "";
  }

}
