import {Link} from './shared/link.module';

export class LinkService {

  private links: Link[] = [
    new Link('http://www.thehindu.com/opinion/op-ed/from-farmer-to-businessman/article7562229.ece',
      'http://www.thehindu.com/migration_catalog/article10253391.ece/alternates/FREE_660/farmer',
      'From Farmer To Businessman',
      'Finance',
      'The fact that food companies prosper but farmers commit suicide shows that profits are in the market not the farm.' +
      ' It is time to replicate the Amul story many times over'),
    new Link('https://www.coursera.org/learn/plant-biology',
      'http://i.huffpost.com/gen/1395712/images/o-TALK-TO-A-PLANT-facebook.jpg',
      'Understanding Plants - Part II: Fundamentals of Plant Biology',
      'Knowledge',
      'This class is aimed at people interested in understanding the basic science of plant biology. In this four ' +
      'lecture series, we' + "'" + 'll first learn about the structure-function of plants and of plant cells...',
      ),
    new Link ('http://www.murdoch.edu.au/News/Find-an-expert/Agriculture-experts/',
      'http://www.murdoch.edu.au/_image/Experts/MikeJones_Biotech.gif/?width=177&height=177',
      'Agriculture experts at Murdoch University',
      'ExpertContact',
      'Murdoch University works at the forefront of the new' +
      'era of environmentally sustainable agriculture...'),
    new Link('http://www.lonelyplanet.com/india/weather',
      'http://www.cray.com/blog/wp-content/uploads/2015/09/Weather-Blog-Image.jpg',
      'Weather Forecast in India',
      'Weather',
      'Weather forecast over places in India'
      )
  ];


  getKnowLedgeLinks () {
    const filteredLinksArr = [];
    for (var i = 0; i < this.links.length; i++) {
      if (this.links[i]['category'] === 'Knowledge') {
        filteredLinksArr.push(this.links[i]);
      }
    }
    return filteredLinksArr;
  };
  getFinanceLinks () {
    const filteredLinksArr = [];
    for (var i = 0; i < this.links.length; i++) {
      if (this.links[i]['category'] === 'Finance') {
        filteredLinksArr.push(this.links[i]);
      }
    }
    return filteredLinksArr;
  }
  getExpertLinks () {
    const filteredLinksArr = [];
    for (var i = 0; i < this.links.length; i++) {
      if (this.links[i]['category'] === 'ExpertContact') {
        filteredLinksArr.push(this.links[i]);
      }
    }
    return filteredLinksArr;
  }
  getWeatherLinks () {
    const filteredLinksArr = [];
    for (var i = 0; i < this.links.length; i++) {
      if (this.links[i]['category'] === 'Weather') {
        filteredLinksArr.push(this.links[i]);
      }
    }
    return filteredLinksArr;
  }
  getLinkByHeading(heading: string) {
    const link = this.links.find(
      (l) => {
        return l.heading === heading;
      }
    );
    return link;
  }
  getLinksByCategory(category: string) {
    const resultArray = this.links.filter (link => {
        return link['category'] === category;
      }
    );
    return resultArray;
  }
}
