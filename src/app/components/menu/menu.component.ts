import { AuthentificationService } from 'src/app/service/authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 isAuth: boolean;
  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
    

  }

}
