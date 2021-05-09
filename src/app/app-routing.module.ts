import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchByCapitalComponent} from './search-by-capital/search-by-capital.component';
import {SearchByCurrencyComponent} from './search-by-currency/search-by-currency.component';
import {SearchByNameComponent} from './search-by-name/search-by-name.component';
import {MainPageComponent} from './main-page/main-page.component';
import {CountryInfoComponent} from './country-info/country-info.component';
import {SearchComponent} from './search/search.component';

const  routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'country-info/:name', component: CountryInfoComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search-by-name', component: SearchByNameComponent},
  {path: 'search-by-capital', component: SearchByCapitalComponent},
  {path: 'search-by-currency', component: SearchByCurrencyComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
