import { User } from 'src/app/modele/user';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {
  users: [];

  constructor(private auth: AuthentificationService, private router: Router  ) { }

  ngOnInit() {
   this.auth.getUsers().subscribe(
     data => {
       this.users = data["hydra:member"];
     },
     error => {
       console.log(error);
     }
   );
  }
  onStatus(id) {
    this.auth.getStatus(id).subscribe(
      data => {
        alert(JSON.stringify(data["message"]));
             // tslint:disable-next-line: align
             this.auth.getUsers().subscribe(
              datas => {
              this.users = datas["hydra:member"];
             },
            error => {
              console.log(error);
            }
          );
      }
      );
   
  }
}
