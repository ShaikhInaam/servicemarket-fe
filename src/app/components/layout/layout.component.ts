import { Component, OnInit } from '@angular/core';
import {LayoutService} from './layout.service';
import {BaseRequestModel} from '../../models/base-request.model';
import {BlockUI, NgBlockUI} from 'ng-block-ui';
import {UiBlock} from '../../utils/ui-block';
import {DASHBOARD_PATH, DASHBOARD_URL, JOB_PORTAL_PATH, NEW_JOBS_PATH} from '../../shared/application-core/app-frontend-screens';
import {HttpResponseModel} from '../../models/http-response.model';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @BlockUI('block-screen') blockUIScreen: NgBlockUI;
  // tslint:disable-next-line:max-line-length
  menuResponse = {responseCode: '00100', responseMessage: 'SUCCESS', response: [{menu: 'A', isActive: 'true', subMenu: [{name: 'a', isActive: 'true', level: 1, nextLevel: [{name: 'aa', isActive: true, level: 2, nextLevel: [{name: 'aaa', isActive: true, level: 3}, {name: 'aab', isActive: true, level: 3}]}, {name: 'ab', isActive: true, level: 2, nextLevel: [{name: 'aba', isActive: true, level: 3}, {name: 'abb', isActive: true, level: 3, nextLevel: [{name: 'abc', isActive: true, level: 4}]}]}]}]}, {menu: 'B', isActive: 'true', subMenu: [{name: 'a', isActive: 'true', level: 1, nextLevel: [{name: 'aa', isActive: true, level: 2, nextLevel: [{name: 'aaa', isActive: true, level: 3}, {name: 'aab', isActive: true, level: 3}]}, {name: 'ab', isActive: true, level: 2, nextLevel: [{name: 'aba', isActive: true, level: 3}, {name: 'abb', isActive: true, level: 3, nextLevel: [{name: 'abc', isActive: true, level: 4}]}]}]}]}, {menu: 'C', isActive: true, level: 1}]};
  menuHtml = '';
  menus = [];
  menuId = 0;
  constructor(private layoutService: LayoutService) {
      UiBlock.setUIBlock(this.blockUIScreen);
  }

  ngOnInit(): void {
    const request: BaseRequestModel = new BaseRequestModel();
    request.transactionId = '1';
   // this.menus = this.menuResponse.response;
    this.layoutService.getMenus(request).subscribe((response: HttpResponseModel) => {
      if (response.responseCode === '00100') {
        // response.response.push({menu: 'Login',
        //   menuURL: `${DASHBOARD_PATH}`,
        //   isActive: 'true'});
        // this.createMenu(response.response);
        this.menus = response.response;
      }else{
        NotificationService.error(response.responseMessage);
      }
    });
  }

  createMenu(menus): any {
    menus.forEach((menu) => {
      const menuID = this.menuId++;
      // tslint:disable-next-line:no-bitwise
      const isSubMenu = menu.subMenu;
      console.log(menuID);
      if (menu?.isActive === 'true') {
        this.menuHtml = this.menuHtml.concat('<li class="nav-item">' +
          '<a class="nav-link ' + (isSubMenu ? 'collapsed' : '') + ' text-truncate" ' +
          '' + (isSubMenu ? ('href="#menu' + menuID + '"') : '') + '' +
          '' + (menu.menuURL ? ' [routerLink]="' + menu.menuURL + '" ' : '') + '' +
          ' ' + (isSubMenu ? 'data-toggle="collapse"' : '') + ' >' +
          '<span class="hover-overlay  d-sm-inline">');
        this.menuHtml = this.menuHtml.concat(menu.menu);
        this.menuHtml = this.menuHtml.concat('</span></a>');
        if (isSubMenu) {
          this.menuHtml = this.menuHtml.concat('<div class="collapse" id="menu' + menuID + '" aria-expanded="false">\n' +
            '<ul class="flex-column pl-2 nav">');
          this.createMenu(isSubMenu);
          this.menuHtml = this.menuHtml.concat('</ul>' +
            '</div>');
        } else {

        }
        this.menuHtml = this.menuHtml.concat('</li>');
      }
    });
  }
  isActive(menu): boolean{
    const isActive = menu && menu.isActive === 'true';
    if(this.isSubMenu(menu) && isActive){
      this.menuId = this.menuId + 1;
    }
    console.log(this.menuId);
    return isActive;
  }
  isSubMenu(menu): boolean{
    return menu && menu.subMenu;
  }
}
