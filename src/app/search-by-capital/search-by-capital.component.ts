import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Country} from '../domain/Country';
import {ApiHttpService} from '../api-http.service';

@Component({
  selector: 'app-search-by-capital',
  templateUrl: './search-by-capital.component.html',
  styleUrls: ['./search-by-capital.component.css']
})
export class SearchByCapitalComponent implements OnInit {
  searchForm: FormGroup;
  @Input() country: Country;
  countryList: Country[] = [];

  constructor(private apiHttp: ApiHttpService,
              private builder: FormBuilder) { }

  ngOnInit(): void {
    this.makeForm();
  }

  // tslint:disable-next-line:typedef
  makeForm() {
    // @ts-ignore
    this.searchForm = this.builder.group({
        capital: ['', Validators.required]
      }
    );
  }

  getCountryByCapital(): void {
    console.log('start');
    this.apiHttp.getCountryByCapital(this.searchForm.value).subscribe(country => {
        this.countryList = country;
        this.searchForm.reset();
      }
    );
  }
}
