<template>
  <f7-page name="DM1001">
    <f7-navbar title="详情页" back-link="Back"></f7-navbar>
    <f7-block-title>详情展示</f7-block-title>
    <f7-block strong>
      <p></p>
      <p>{{ info.a }}</p>
    </f7-block>
    <f7-block>
      <p>{{ info.b }}</p>
      <p>{{ info.c }}</p>
      <p>{{ info.d }}</p>
    </f7-block>
    <f7-block strong>
      <f7-link @click="f7router.back()">返回上一页</f7-link>
    </f7-block>
  </f7-page>
</template>


<script lang="ts">
import { rpc, pushWindow } from "@/utils/bridge";
import { reactive } from "vue";

export default {
  props: {
    f7route: Object,
    f7router: Object,
  },
  setup(props) {
    const info = reactive(props.f7route.query);
    console.warn("参数接收：");
    console.warn(info);
    return { info };
  },
};
</script>
<style lang="less">
@import "./index.less";
</style>