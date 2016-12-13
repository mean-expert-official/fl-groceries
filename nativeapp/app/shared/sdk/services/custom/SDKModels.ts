/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Account } from '../../models/Account';

@Injectable()
export class SDKModels {

  private models: { [name: string]: any } = {
    User: User,
    Account: Account,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }
}
