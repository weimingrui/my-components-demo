/* eslint-disable */
// Disables no-alert for the rest of the file
import { mixins, Component } from 'nuxt-property-decorator'

// modal check visible mixin 文件中包含校验modal的方法
import RewardVisibleMixin from '@/components/reward-notice/visible'

@Component({})
export default class ModalManageMixin extends mixins(...[RewardVisibleMixin]) {
  [key: string]: any


  get modalConfigList() {
    return [
      {
        name: 'RewardNotice',
        component: () =>
          import(
            '@/components'
          ),
        getVisibleVal: () => {
          try {
            if (this.checkVisibleRewardNotice) {
              return this.checkVisibleRewardNotice()
            }
          } catch {
            return false
          }
          
          return false
        },
        continueOpenNext: true,
        componentProps: () => {
          return {}
        }
      },
      {
        name: 'ota',
        getVisibleVal: () => true,
        component:  import(
          '@/components/reward-notice'
        ),
        componentProps: () => {
          return { location: 'homepage-bottom' }
        }
      }
    ]
  }
}
