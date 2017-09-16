import { Component, OnInit } from '@angular/core';
import {Link} from "../shared/link.module";
import {LinkService} from "../link.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-link-group',
  templateUrl: './link-group.component.html',
  styleUrls: ['./link-group.component.css']
})
export class LinkGroupComponent implements OnInit {
  links: Link[];
  constructor(private linkService: LinkService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let category = this.route.snapshot.params['category'];
    this.links = this.linkService.getLinksByCategory(category);

    this.route.params.subscribe(
      (params: Params) => {
        category = params['category'];
        this.links = this.linkService.getLinksByCategory(category);
      }
    );
  }
}
