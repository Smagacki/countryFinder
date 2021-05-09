import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Country} from '../domain/Country';
import {ApiHttpService} from '../api-http.service';

@Component({
  selector: 'app-search-by-currency',
  templateUrl: './search-by-currency.component.html',
  styleUrls: ['./search-by-currency.component.css']
})
export class SearchByCurrencyComponent implements OnInit {
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
      currencies: ['', Validators.required]
    });
  }

  getCountryByCurrency(): void {
    console.log('start');
    this.apiHttp.getCountryByCurrency(this.searchForm.value).subscribe(country => {
        this.countryList = country;
        this.searchForm.reset();
      }
    );
  }
}
