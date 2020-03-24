import { AuthentificationService } from './../../service/authentification.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/modele/user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  user: User;

  constructor(private auth: AuthentificationService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id: string = params['id'];
      this.auth.getUser(id).subscribe(
        data => {
          this.user = data;
        }
      );
    });
  }
  onDelete(user: User) {
    this.auth.deleteUser(user);
    this.router.navigate(['/list']);
  }

}
