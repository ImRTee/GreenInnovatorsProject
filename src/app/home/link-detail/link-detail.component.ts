import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Link} from "../../shared/link.module";
import {LinkService} from "../../link.service";

@Component({
  selector: 'app-link-detail',
  templateUrl: './link-detail.component.html',
  styleUrls: ['./link-detail.component.css']
})
export class LinkDetailComponent implements OnInit {
  linkItem: Link;
  constructor( private route: ActivatedRoute,
               private linkService: LinkService) { }

  ngOnInit() {
    const heading = this.route.snapshot.params['heading'];
    this.linkItem = this.linkService.getLinkByHeading(heading);
  }

}
