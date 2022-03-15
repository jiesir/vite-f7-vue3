<template>
  <f7-app v-bind="f7params">
    <f7-panel left cover theme-dark>
      <f7-view url="/DM0002/"></f7-view>
    </f7-panel>
    <f7-panel right reveal theme-dark>
      <f7-view url="/DM0003/"></f7-view>
    </f7-panel>
    <f7-view id="view-home" main url="/"></f7-view>
  </f7-app>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { f7, f7ready } from "framework7-vue";
import { Framework7Parameters } from "framework7/types";

import { getDevice } from "framework7/lite-bundle";
import Theme from "@/utils/theme";
import routes from "@/utils/router";

export default {
  setup() {
    const theme = Theme.extractThemeSearch();
    const device = getDevice();
    const f7params: Framework7Parameters = {
      name: "Vite App",
      theme,
      autoDarkTheme: false,
      id: "jiesir",
      routes: routes,
      // view: {
      //   browserHistory: true,
      //   browserHistorySeparator: "#"
      // },
      input: {
        scrollIntoViewOnFocus: device.capacitor,
        scrollIntoViewCentered: device.capacitor,
      },
      statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
      },
    };

    onMounted(() => {
      f7ready(() => {
        Theme.init();
      });
    });

    return {
      f7params,
    };
  },
};
</script>
<style lang="less" scoped>
@import "@/styles/index.less";
</style>

