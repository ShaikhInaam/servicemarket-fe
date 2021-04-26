import { Component, OnInit } from '@angular/core';
import {UiBlock} from '../../../utils/ui-block';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    UiBlock.blockUI();
    UiBlock.unblockUI();
  }

}
