import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../domain/Country';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() country: Country;

  constructor() { }
  ngOnInit(): void {}
}
