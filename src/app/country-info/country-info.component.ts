import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../domain/Country';
import {ApiHttpService} from '../api-http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {
  @Input() country: Country;
  countryDetails: Country[] = [];

  constructor(private apiHttp: ApiHttpService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCountry(this.route.snapshot.paramMap.get('name'));
  }

  getCountry(name): void {
    this.apiHttp.getCountry(name).subscribe(country => {
      console.error();
      this.countryDetails = country;

    });
  }
}
