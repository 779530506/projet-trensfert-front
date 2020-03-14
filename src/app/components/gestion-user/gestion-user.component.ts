import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.scss']
})
export class GestionUserComponent implements OnInit {
  formUser: FormGroup;
  roles: [];
  iri = `/api/roles/` ;

  constructor(private fb: FormBuilder, private auth: AuthentificationService, private router: Router) {
   }
  ngOnInit() {
    this.formUser = this.fb.group({
        nom: [],
        prenom: [],
        email: [],
        adresse: [],
        telephon: [],
        dateNaissance: [],
        username: [],
        password: [],
        isActive: [],
        role: [],
    });

    this.auth.getRoles().subscribe(
      data => {
        console.log(data);
        // tslint:disable-next-line:quotemark
            this.roles = data["hydra:member"];
      }
    );
  }
  onAdd() {
    const user = {
      username : this.formUser.value.username,
      password : this.formUser.value.password,
      nom : this.formUser.value.nom,
      prenom : this.formUser.value.prenom,
      adresse : this.formUser.value.adresse,
      email : this.formUser.value.email,
      telephon : this.formUser.value.telephon,
      // tslint:disable-next-line:quotemark
      role : `${this.iri}${this.formUser.value.role}` ,
      dateNaissance : this.formUser.value.dateNaissance,
      isActive : this.formUser.value.isActive,

    };
    // tslint:disable-next-line:quotemark
    console.log(user);
    this.auth.postUser(user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list']);

        } );
    //console.log(this.auth.postUser(user));
  }

}
