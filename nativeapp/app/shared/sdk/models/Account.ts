/* tslint:disable */

declare var Object: any;
export interface AccountInterface {
  realm?: string;
  username?: string;
  password: string;
  challenges?: any;
  email: string;
  emailVerified?: boolean;
  verificationToken?: string;
  status?: string;
  created?: Date;
  lastUpdated?: Date;
  id?: number;
  createdAt: Date;
  updatedAt: Date;
  accessTokens?: Array<any>;
}

export class Account implements AccountInterface {
  realm: string;
  username: string;
  password: string;
  challenges: any;
  email: string;
  emailVerified: boolean;
  verificationToken: string;
  status: string;
  created: Date;
  lastUpdated: Date;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  accessTokens: Array<any>;
  constructor(data?: AccountInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Account`.
   */
  public static getModelName() {
    return "Account";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Account for dynamic purposes.
  **/
  public static factory(data: AccountInterface): Account{
    return new Account(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Account',
      plural: 'Accounts',
      properties: {
        realm: {
          name: 'realm',
          type: 'string'
        },
        username: {
          name: 'username',
          type: 'string'
        },
        password: {
          name: 'password',
          type: 'string'
        },
        credentials: {
          name: 'credentials',
          type: 'any'
        },
        challenges: {
          name: 'challenges',
          type: 'any'
        },
        email: {
          name: 'email',
          type: 'string'
        },
        emailVerified: {
          name: 'emailVerified',
          type: 'boolean'
        },
        verificationToken: {
          name: 'verificationToken',
          type: 'string'
        },
        status: {
          name: 'status',
          type: 'string'
        },
        created: {
          name: 'created',
          type: 'Date'
        },
        lastUpdated: {
          name: 'lastUpdated',
          type: 'Date'
        },
        id: {
          name: 'id',
          type: 'number'
        },
        createdAt: {
          name: 'createdAt',
          type: 'Date'
        },
        updatedAt: {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'Array<any>',
          model: ''
        },
      }
    }
  }
}
