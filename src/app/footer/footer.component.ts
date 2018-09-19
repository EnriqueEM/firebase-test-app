import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {  
  footerL1: any[];
  footerL2: any[];
  footerL3: any[];
  constructor(private _db: AngularFireDatabase) {}

  ngOnInit() {
    //ELEMENTOS DE LA LISTA Social
    this._db.list('/footerSocial')
    .valueChanges()
    .subscribe(foot1 =>{
      this.footerL1 = foot1;
    });
    //ELEMENTOS DE LA LISTA Bussines
    this._db.list('/footerBussiness')
    .valueChanges()
    .subscribe(foot2 =>{
      this.footerL2 = foot2;
    });
    //ELEMENTOS DE LA LISTA Navegacion    
    this._db.list('/listSecciones')
    .valueChanges()
    .subscribe(foot3 =>{
      this.footerL3 = foot3;
    });

  }

}
