/**
 * Copyright 2020 NEM Foundation (https://nem.io)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {DatabaseTable} from '@/core/database/DatabaseTable'
import {AccountsModel} from '@/core/database/entities/AccountsModel'

export class AccountsTable extends DatabaseTable {
  public constructor() {
    super('accounts', [
      'accountName',
      'wallets',
      'password',
      'hint',
      'networkType',
      'seed',
    ])
  }

  /**
   * Create a new model instance
   * @return {AccountsModel}
   */
  public createModel(): AccountsModel {
    return new AccountsModel()
  }
}
