import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  formUser: FormGroup;
  error: string;

  constructor(private fb: FormBuilder, private auth: AuthentificationService, private router: Router) { }

  ngOnInit() {
    this.formUser = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    const user = {
      username : this.formUser.value.username,
      password : this.formUser.value.password,
    };
    this.auth.getConnexion(user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/list']);
      },
      error => {
        this.error = "autorisation refusée";
        console.log(error);
      }
    );
  }

}
