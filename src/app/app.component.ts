import { Component } from '@angular/core';
import { Content } from 'src/model/content';
import { Group } from 'src/model/group';
import { Link } from 'src/model/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public groups: Group[] = Content.links;
  public searchEngines: Link[] = Content.searchEngines;

  public buildGenericUrl(url: string): string {
    return url.substring(0, url.indexOf('/', 8));
  }
}
