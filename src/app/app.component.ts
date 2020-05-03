import { Component, ViewChild, OnInit } from '@angular/core';
import { restaurantData } from 'src/assets/data/restaurants';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'restaurants';
  displayedColumns: string[] = [
    'id',
    'name',
    'cuisines',
    'avgCostForTwo',
    'currency',
    'hasTableBooking',
    'hasOnlineDelivery',
    'rating',
    'ratingColor',
    'ratingText',
    'votes'
  ];
  cuisines = [];
  dataSource = new MatTableDataSource(restaurantData);
  filter = {
    cuisines: '',
    // name: ''
  };
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  applyCuisineFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyNameFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilter(event: Event, type: 'cuisine' | 'name') {
    const filterValue = (event.target as HTMLInputElement).value;
    // type === 'cuisine' ? this.filter.cuisines = filterValue : this.filter.name = filterValue;
    this.filter.cuisines = filterValue
    console.log(this.filter); 
    // this.dataSource.filter = JSON.stringify(this.filter);
    this.dataSource.filter = filterValue;

  }
}

// export const Cuisines = [
//   'French',
//   'Japanese',
//   'Desserts',
//   'Seafood',
//   'Asian',
//   'Filipino',
//   'Indian',
//   'Sushi',
//   'Korean',
//   'Chinese',
//   'European',
//   'Mexican',
//   'Ice Cream',
//   'Cafe',
//   'American',
//   'Italian',
//   'Pizza',
//   'Bakery',
//   'Mediterranean',
//   'Fast Food',
//   'Brazilian',
//   'Arabian',
//   'Bar Food',
//   'Grill',
//   'International',

// ];
