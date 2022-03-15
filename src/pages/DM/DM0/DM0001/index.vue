<template>
  <f7-page name="home">
    <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link
          icon-ios="f7:menu"
          icon-aurora="f7:menu"
          icon-md="f7:menu"
          panel-open="left"
        ></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>vite-f7-vue3</f7-nav-title>
      <f7-nav-right>
        <f7-link
          icon-ios="f7:menu"
          icon-aurora="f7:menu"
          icon-md="f7:menu"
          panel-open="right"
        ></f7-link>
      </f7-nav-right>
      <f7-nav-title-large>vite-f7-vue3</f7-nav-title-large>
    </f7-navbar>
    <f7-block strong>
      <p>{{ store.getMsg }}</p>
      <p>姓名：{{ store.getUserInfo.name }}</p>
      <p>年龄：{{ store.getUserInfo.age }}</p>
    </f7-block>
    <f7-block-title>功能清单</f7-block-title>
    <f7-list>
      <f7-list-button
        title="请求接口弹框显示"
        color="orange"
        @click="SQ1004"
      ></f7-list-button>
      <f7-list-button
        title="请求接口页面跳转传参展示"
        color="orange"
        @click="SQ9999"
      ></f7-list-button>
      <f7-list-button
        title="404页面"
        color="orange"
        link="/error/"
      ></f7-list-button>
      <f7-list-button
        title="改变Store"
        color="orange"
        @click="changeStore"
      ></f7-list-button>
      <!-- <f7-list-item link="/DM1002/" title="表单"></f7-list-item> -->
    </f7-list>
  </f7-page>
</template>

<script lang="ts">
import { f7 } from "framework7-vue";
import { rpc, pushWindow } from "@/utils/bridge";
import { useStore } from "@/utils/store/msg";

export default {
  name: "App",
  props: {
    f7route: Object,
    f7router: Object,
  },
  setup(props) {
    const store = useStore();

    const SQ1004 = () => {
      rpc("SQ1004").then((res) => {
        console.warn("res:", res);
        f7.dialog.alert(JSON.stringify(res), "提示", () => {
          f7.loginScreen.close();
        });
      });
    };

    const SQ9999 = () => {
      rpc("SQ9999").then((res) => {
        console.warn("res:", res);
        // f7.dialog.alert(JSON.stringify(res), "提示", () => {
        //   f7.loginScreen.close();
        pushWindow(props.f7router, "DM1001", res.item);
        // });
      });
    };

    const changeStore = () => {
      store.changeState("樱木花道", 32);
    };

    return { store, SQ1004, SQ9999, changeStore };
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>