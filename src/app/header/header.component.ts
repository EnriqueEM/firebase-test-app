import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu: any[];
  constructor(private _db: AngularFireDatabase) { }

  ngOnInit() {
    this._db.list('/listSecciones')
    .valueChanges()
    .subscribe(menuI =>{
      this.menu = menuI;      
    });
  }

}
