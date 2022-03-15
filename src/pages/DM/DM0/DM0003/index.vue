<template>
  <f7-page name="right">
    <f7-navbar title="右侧菜单"></f7-navbar>
    <f7-block>右侧功能清单</f7-block>
    <f7-list>
      <f7-list-item link="/DM0004/" title="Login"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script lang="ts">
import { popWindow } from "@/utils/bridge";
export default {
  name: "App",
  components: {},
  setup() {
    function back() {
      popWindow();
    }

    return {
      back,
    };
  },
};
</script>

<style lang="less">
@import "./index.less";
</style>