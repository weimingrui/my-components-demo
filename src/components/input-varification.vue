<template>
  <div class="input-varification-container">
    <div class="varification-content">
      <div class="flex">
        <div class="input-container flex-full">
          <input :placeholder="newplaceholder" v-model="newValue"/>
        </div>
        <span class="requre-icon" v-if="valueRequred">*</span>
      </div>
      <p class="warning" v-if="noticeText">{{noticeText}}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'InputVarification',
  props: {
    placeholder: {
      type:String,
      default:''
    },
    value: {
      request:true,
      type:String,
      default: ''
    },
    errorText: {
      type: String,
      default: ''
    },
    warningText: {
      type: String,
      default:''
    },
    requred: {
      type: Boolean,
      default: false
    },
    varilidErrorHandle: {
      type: Function
    },
    varilidWarnHandle: {
      type: Function
    }
  },
  watch: {
    newValue(value){
      this.variliadState = 0;
      if (this.varilidErrorHandle){
        if (this.varilidErrorHandle(value)) {
          this.variliadState = 1;
        }
      } else if (this.varilidWarnHandle) {
        if (this.varilidErrorHandle(value)) {
          this.variliadState = 2;
        }
      }
      console.log(value)
    }
  },
  computed: {
    newplaceholder() {
      let placeholder = this.placeholder || '';
      return placeholder;
    },
    noticeText() {
      let state = this.variliadState;
      if (state === 1 && this.errorText) {
        return this.errorText;
      } else if (state === 2 && this.warningText) {
        return this.warningText;
      }
      return '';
    },
    valueRequred(){
      if(this.requred){
        return true;
      }
      return false;
    }
  },
  beforeMount() {
    this.newValue = '';
  },
  data () {
    return {
      variliadState: 0,
      newValue: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .flex
    display flex
  .flex-full
    flex: 1
  .flex-wrap{
    display flex
    flex-wrap wrap
  }
  .input-varification-container{
    .varification-content{
      .input-container{
        width 100%
        input{
          width -webkit-fill-available
          margin 1px
          padding 4px 8px
          border none
          height 24px
        }
        input::-webkit-input-placeholder{
             color #cccccc
        }
        display inline-block
        background-color rgba(2, 11, 6, 0.48)
      }
      .requre-icon{
        display inline-block
        margin-left 4px
        color #ff2f25
        margin-top 12px
      }

      p{
        margin 2px 8px
        text-align left
        text-overflow ellipsis
        font-size small
      }
      p.error{
        color red
      }
      p.warning{
        color:  rgba(253, 225, 15, 0.98);
      }
    }
  }
</style>
