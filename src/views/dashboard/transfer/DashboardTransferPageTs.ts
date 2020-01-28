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
import {Component, Vue} from 'vue-property-decorator'
import {mapGetters} from 'vuex'

// internal dependencies
import {AccountsModel} from '@/core/database/entities/AccountsModel'
import {WalletsModel} from '@/core/database/entities/WalletsModel'

// child components
// @ts-ignore
import FormTransferCreation from '@/views/forms/FormTransferCreation/FormTransferCreation.vue'
// @ts-ignore
import DisabledFormOverlay from '@/components/DisabledFormOverlay/DisabledFormOverlay.vue'

@Component({
  components: {
    FormTransferCreation,
    DisabledFormOverlay,
  },
  computed: {...mapGetters({
    currentAccount: 'account/currentAccount',
    currentWallet: 'wallet/currentWallet',
  })},
})
export class DashboardTransferPageTs extends Vue {
  /**
   * Currently active account
   * @see {Store.Account}
   * @var {AccountsModel}
   */
  public currentAccount: AccountsModel

  /**
   * Currently active wallet
   * @see {Store.Wallet}
   * @var {WalletsModel}
   */
  public currentWallet: WalletsModel
/**
   * List of available follow-up pages
   * @var {any[]}
   */
  public transferTypeList = [
    {
      name: 'ordinary_transfer',
      isSelect: true,
      disabled: false,
    },
  ]
}
