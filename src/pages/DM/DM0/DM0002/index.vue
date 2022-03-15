<template>
  <f7-page name="DM0002">
    <f7-navbar title="左侧菜单"></f7-navbar>
    <f7-block>左侧功能清单</f7-block>
    <f7-button fill raised popup-open="#my-popup">Popup</f7-button>
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>
    <f7-button fill raised @click="setPlatformTheme('ios')">Ios</f7-button>
    <f7-button fill raised @click="setPlatformTheme('md')">Android</f7-button>
    <f7-button fill raised @click="setLayoutTheme('light')">light</f7-button>
    <f7-button fill raised @click="setLayoutTheme('dark')">dark</f7-button>
  </f7-page>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import Theme from "@/utils/theme";
import { f7 } from "framework7-vue";
import { getDevice } from "framework7";
import { popWindow, toast } from "@/utils/bridge";
export default {
  name: "App",
  components: {},
  setup() {
    const theme = Theme.hasDarkColorScheme() ? ref("dark") : ref("light");
    const platform = ref("ios");

    onMounted(() => {
      let theme = Theme.extractThemeSearch();
      if (theme === "auto") {
        theme = getDevice().ios ? "ios" : "md";
      }
      platform.value = theme === "aurora" ? "md" : theme;
    });

    function back() {
      popWindow();
    }

    const setLayoutTheme = (theme) => {
      Theme.setDark(theme === "dark");
      theme = theme;
      toast(`${theme}主题切换成功`);
    };

    const setPlatformTheme = (theme) => {
      if (theme !== platform.value) {
        f7.dialog.confirm("切换平台主题会刷新页面!", "确认刷新", () =>
          Theme.replaceLocation(theme)
        );
      }
    };
    return {
      platform,
      back,
      setLayoutTheme,
      setPlatformTheme,
    };
  },
};
</script>

<style lang="less">
@import "./index.less";
</style>