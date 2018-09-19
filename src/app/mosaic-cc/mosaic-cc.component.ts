import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
@Component({
  selector: 'app-mosaic-cc',
  templateUrl: './mosaic-cc.component.html',
  styleUrls: ['./mosaic-cc.component.css']
})
export class MosaicCcComponent implements OnInit {  
  regiones: any[];
  cardsCC: any[];
  constructor(private _db: AngularFireDatabase) { }

  ngOnInit() {  
    //LISTA DE REGIONES  
    this._db.list('/regiones')
    .valueChanges()
    .subscribe(region => {
      this.regiones = region;      
    });
    //LISTA DE CENTROS COMERCIALES
    this._db.list('/centrosComerciales')
    .valueChanges()
    .subscribe(cardCC =>{
      this.cardsCC = cardCC;
      console.log(cardCC);
    });
  }
}
