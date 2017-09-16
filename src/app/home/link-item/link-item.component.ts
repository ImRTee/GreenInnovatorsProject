import {Component, Input, OnInit} from '@angular/core';
import {Link} from "../../shared/link.module";

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.css']
})
export class LinkItemComponent implements OnInit {
  @Input() link: Link;
  constructor() { }

  ngOnInit() {
     // this.link['desc'] = this.descriptionCutter(this.link['desc']);
    this.descriptionCutter('dsafjdkafajdbfadsjfbakj');
  }
  descriptionCutter(desc: string) {
    const descPieces = desc.split('');
    console.log(descPieces);
    if ( descPieces.length > 10 ) {
      const redandunt = desc.substring(11);

    }
  }
}
