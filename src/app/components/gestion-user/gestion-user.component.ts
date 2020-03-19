import { User } from 'src/app/modele/user';
import { Router, ActivatedRoute } from '@angular/router';
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
  user: User;

  constructor(private fb: FormBuilder, private auth: AuthentificationService, private route: ActivatedRoute, private router: Router) {
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
        isActive: [true],
        role: [],
    });

    this.auth.getRoles().subscribe(
      data => {
        console.log(data);
        // tslint:disable-next-line:quotemark
            this.roles = data["hydra:member"];
      }
    );
    // editer un user
    this.route.params.subscribe(params => {
      const id: string = params['id'];
      this.auth.getUser(id).subscribe(
        data => {
          this.user = data;
          this.formUser = this.fb.group({
            nom: [this.user.nom],
            prenom: [this.user.prenom],
            email: [this.user.email],
            adresse: [this.user.adresse],
            telephon: [this.user.telephon],
            dateNaissance: [this.user.dateNaissance],
            username: [this.user.username],
            password: [this.user.password],
            isActive: [this.user.isActive],
            role: [this.user.role],
        });
        }
      );
    });
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
    this.auth.postUser(user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list']);

        } );
   // tslint:disable-next-line: align
   //if (!this.user.id) {
    
  //  } else {
  //   this.auth.editUser(user).subscribe(
  //     res => {
  //       console.log(res);
  //       this.router.navigate(['/list']);

  //       } );
  //  }
  }

}
