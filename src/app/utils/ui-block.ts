import {NgBlockUI} from 'ng-block-ui';

export class UiBlock {
    constructor() {}
    static uiBlock: NgBlockUI = null;
    static setUIBlock(instance: NgBlockUI): void{
        this.uiBlock = instance;
    }

    static blockUI(message: string = 'Loading...'): void{
        setTimeout(() => {
          if (this.uiBlock != null) {
            this.uiBlock.start(message);
          }
        }, 150);
    }

    static unblockUI(): void{
      if (this.uiBlock.isActive){
        this.uiBlock.stop();
      }else {
        setTimeout(() => {
          if (this.uiBlock.isActive)
            this.uiBlock.stop();
        }, 500);
      }
    }
}
