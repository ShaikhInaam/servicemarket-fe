import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {NotificationService} from './service/notification.service';
import {jqxNotificationComponent} from 'jqwidgets-ng/jqxnotification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'servicemarket-frontEnd';
  @ViewChild('successNotification') successNotification: jqxNotificationComponent;
  @ViewChild('errorNotification') errorNotification: jqxNotificationComponent;
  @ViewChild('warnNotification') warnNotification: jqxNotificationComponent;

  ngAfterViewInit(): void {
    NotificationService.setNotificationWidget(this.successNotification, this.errorNotification, this.warnNotification);
  }
}
