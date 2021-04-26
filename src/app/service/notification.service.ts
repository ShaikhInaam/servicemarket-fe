import {ChangeDetectorRef, Injectable} from '@angular/core';
import {jqxNotificationComponent} from 'jqwidgets-ng/jqxnotification';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  static messageBuffer = [];
  static notificationTimeoutHandler;
  static notificationInterval = 400;

  static successNotification : jqxNotificationComponent;
  static errorNotification : jqxNotificationComponent;
  static warnNotification : jqxNotificationComponent;
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  // tslint:disable-next-line:typedef
  static setNotificationWidget(successNotification, errorNotification, warnNotification){
    this.successNotification = successNotification;
    this.errorNotification = errorNotification;
    this.warnNotification = warnNotification;
  }

  static notify(type: string, message: string, autoClose = true) {
    if (this.messageBuffer.indexOf(message) !== -1) {
      return;
    }

    this.messageBuffer.push(message);

    clearTimeout(this.notificationTimeoutHandler);
    this.notificationTimeoutHandler = setTimeout(() => {
      this.messageBuffer = [];
    }, this.notificationInterval);

    const typeNotification: jqxNotificationComponent = this[`${type}Notification`];
    $(typeNotification.elementRef.nativeElement)
      .find('td.jqx-notification-content')
      .html(message);
    typeNotification.autoClose(autoClose);
    typeNotification.open();
  }

  // tslint:disable-next-line:typedef
  static clossAll(){
    if(this.successNotification)
      this.successNotification.closeAll();
    if (this.errorNotification)
      this.errorNotification.closeAll();
    if (this.warnNotification)
      this.warnNotification.closeAll();
  }

  // tslint:disable-next-line:typedef
  static success(message: string, autoClose= true){
    this.notify('success', message, autoClose);
  }

  // tslint:disable-next-line:typedef
  static error(message: string, autoClose= true){
    this.notify('error', message, autoClose);
  }

  // tslint:disable-next-line:typedef
  static warn(message: string, autoClose= true){
    this.notify('warn', message, autoClose);
  }
}
