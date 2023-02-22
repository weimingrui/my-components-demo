export type ModalConfigItem = {
  name: string
  getVisibleVal: Function
  continueOpenNext?: boolean
  [keyname: string]: any
}
