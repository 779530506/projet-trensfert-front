import { AuthentificationService } from './../../service/authentification.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/modele/user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  user: User;
  a="sarr";
  constructor(private auth: AuthentificationService, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
     // tslint:disable-next-line: align
     this.auth.getUser(id).subscribe(
      data => {
         this.user = data["hydra:member"];
         console.log(this.user.email);
      },
      error => {
        console.log(error);
      }
    );

  }

}
