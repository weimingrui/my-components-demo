import { Vue, Component, mixins } from 'nuxt-property-decorator'
import { VNode, CreateElement } from 'vue'

import { ModalConfigItem } from '@/components/modal-manage/type'

/**
 * 返回 modal list中可以展示的modal，或者什么都不展示
 * @param mixinsList 所有modal的check visible function 以及所需的数据，是一个 vue mixin列表
 */
export default function (mixinsList: any[]) {
  @Component({
    name: 'ModalManage'
  })
  class ModalManage extends mixins(Vue, ...mixinsList) {
    [key: string]: any

    private modalList: ModalConfigItem[] = []
    private curModal: ModalConfigItem | null = null
    curVisibleIndex: number = 0

    get modalProps() {
      const config = this.curModal
      return config?.componentProps() || {}
    }

    async nextVisible() {
      if (this.curVisibleIndex >= this.modalList.length) {
        return
      }
      const resultItem: any = await this.checkout()
      // eslint-disable-next-line
      console.log(resultItem?.name)
    }

    public pushModal(modalConfig: ModalConfigItem[] = []) {
      this.modalList.push(...modalConfig)
    }

    public async checkout() {
      let curModalData: ModalConfigItem | null = null

      let ind = this.curVisibleIndex

      for (; ind < this.modalList.length; ind++) {
        const configData: ModalConfigItem = this.modalList[ind]
        const isVisible = await configData.getVisibleVal()
        if (isVisible) {
          curModalData = configData
          break
        }
      }
      this.curVisibleIndex = ind
      this.curModal = curModalData
      return curModalData
    }

    created() {
      this.pushModal(this?.modalConfigList)
      this.nextVisible()
    }

    render(h: CreateElement): VNode | null {
      // 组件
      const config: any = this.curModal
      if (!config) {
        return null
      }

      // view component
      // 同步直接渲染
      return h(config.component, {
        // el: document.body,
        attrs: {
          ...config.componentProps()
        },
        on: {
          'on-close': 
            () => {
              if(config.continueOpenNext)
              {
                this.curVisibleIndex++
                this.nextVisible()
              }
            }


        }
      })
    }
  }
  // document.body.appendChild(instance.$el)
  // 挂载 在body上 或者其他节点上

  // const instance = new ModalManage({
  //   el: $el || document.body,
  //   data: {},
  //   parent: $parent
  // })

  // // Change context
  // // instance.$root = $parent.$root
  // // instance.$parent = $parent
  // document.body.appendChild(instance.$el)
  return ModalManage
}
