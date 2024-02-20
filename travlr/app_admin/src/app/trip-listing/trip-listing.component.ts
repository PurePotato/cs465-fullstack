import { Component, OnInit } from '@angular/core';
//import { trips } from '../data/trips';
import { Trip } from '../models/trips';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  //trips: Array<any> = trips
  trips: Trip[];
  message: string;
  constructor(private tripDataService: TripDataService) { }

  private getTrips(): void {
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for trips';
    this.tripDataService
      .getTrips()
      .then(foundTrips => {
        this.message = foundTrips.length > 0 ? '' : 'No trips found';
        this.trips = foundTrips;
      });
  }
  ngOnInit(): void {
    this.getTrips();
  }

}