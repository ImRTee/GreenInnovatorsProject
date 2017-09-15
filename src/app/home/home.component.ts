import { Component, OnInit } from '@angular/core';
import {LinkService} from "../link.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weatherList;
  financeList;
  knowledgeList;
  expertList;
  constructor( private linkservice: LinkService) { }

  ngOnInit() {
    this.knowledgeList = this.linkservice.getKnowLedgeLinks();
    this.weatherList = this.linkservice.getWeatherLinks();
    this.financeList = this.linkservice.getFinanceLinks();
    this.expertList = this.linkservice.getExpertLinks();
  }

}
