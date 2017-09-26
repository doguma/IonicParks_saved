import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ParkData } from '../../app/providers/park-data';

/*
  Generated class for the ParkList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-park-list',
  templateUrl: 'park-list.html'
})
export class ParkListPage {
  parks: Array<Object> = [];
  searchQuery: string = '';

  
  constructor(public navCtrl: NavController, public parkData: ParkData) {
    parkData.getParks().then(theResult => {
      this.parks = theResult;
    })
  }

  getParks(event){
    this.parkData.getParks().then(theResult => {
      this.parks = theResult;
    })

    let queryString = event.target.value;

    if (queryString !== undefined){
      if (queryString.trim() == ''){ return; }

      this.parkData.getFilteredParks(queryString).then
      (theResult => {
          this.parks = theResult;
      })
    }

  }

  resetList(event){
    this.parkData.getParks().then(theResult => {
      this.parks = theResult;
    })
  }

  goParkDetails(theParkData){
    this.navCtrl.push("ParkDetailsPage", { parkData: theParkData });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkListPage');
  }

  customHeaderFn(record, recordIndex, records){
    if ( recordIndex > 0) {
      if ( record.name.charAt(0)!==records[recordIndex-1]. 
                  name.charAt(0)) {
               return record.name.charAt(0);
          } else {
      return null; }
        } else {
          return record.name.charAt(0);
      }


    }}
