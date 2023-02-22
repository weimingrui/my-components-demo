/*
 * @Author: Arthur
 * @Date: 2023-02-17 15:48:20
 * @LastEditors: Arthur
 * @LastEditTime: 2023-02-22 20:08:44
 * @Description: file content
 */

import { Vue, Component, State, namespace, Prop } from 'nuxt-property-decorator'

// check visible data
const authModule = namespace('auth')

@Component({})
export default class RewardVisibleMixin extends Vue {

  ['checkVisibleRewardNotice']() {
    /* eslint-disable */
    return true
  }
}

