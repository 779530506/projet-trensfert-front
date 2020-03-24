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

  constructor(private fb: FormBuilder,
              private auth: AuthentificationService, private route: ActivatedRoute,
              private router: Router) {
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
        id: []
    });

    this.auth.getRoles().subscribe(
      data => {
        console.log(data);
        this.roles = data['hydra:member'];
      }
    );
    // editer un user
    // remplir le formulaire en cas d'un edit
    this.route.params.subscribe(params => {
      const id: number = params.id;
      if (id >= 1) {
      this.auth.getUser(id).subscribe(
        data => {
          this.user = data;
          console.log(this.user.roles);
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
            id: [this.user.id]
        });
        }
      );
      }
    });
  }
  onAdd() {
    // recuperons les valeurs du formulaire
    const user = {
      username : this.formUser.value.username,
      password : this.formUser.value.password,
      nom : this.formUser.value.nom,
      prenom : this.formUser.value.prenom,
      adresse : this.formUser.value.adresse,
      email : this.formUser.value.email,
      telephon : this.formUser.value.telephon,
      role : `${this.iri}${this.formUser.value.role}` ,
      dateNaissance : this.formUser.value.dateNaissance,
      isActive : this.formUser.value.isActive,
      id : this.formUser.value.id,
    };
    // appel a la methode post ou put selon si id existe ou non
    this.auth.postOrPutUser(user).subscribe(
    res => {
                this.router.navigate(['/list']);
        } );
  }

}
