import { Component } from '@angular/core';
import { Content } from 'src/model/content';
import { Group } from 'src/model/group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public groups: Group[] = Content.links;
  public searchEngines: Group[] = Content.searchEngines;
}
