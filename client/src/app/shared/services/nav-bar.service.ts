import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  _tabs: string[] = ["Gods", "Important NPC's", "Players"];
  _selectedTab: string = "Players";
  selectedTabSubject: Subject<string> = new Subject<string>();

  constructor() { }

  get tabs() { return this._tabs }

  get selectedTab() { return this._selectedTab }

  selectTab(tab: string) {
    if(this.tabs.includes(tab)) {
      this._selectedTab = tab;
      this.selectedTabSubject.next(tab);
    }
  }
}
