<template>
  <f7-view id="my-login-screen">
    <f7-page login-screen>
      <f7-login-screen-title>Login</f7-login-screen-title>
      <f7-list form>
        <f7-list-input
          type="text"
          name="username"
          placeholder="Your username"
          v-model:value="username"
        ></f7-list-input>
        <f7-list-input
          type="password"
          name="password"
          placeholder="Your password"
          v-model:value="password"
        ></f7-list-input>
      </f7-list>
      <f7-list>
        <f7-list-button
          title="Sign In"
          @click="alertLoginData"
        ></f7-list-button>
        <f7-block-footer>
          Some text about login information.
          <br />Click "Sign In" to close Login Screen
        </f7-block-footer>
      </f7-list>
    </f7-page>
  </f7-view>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { f7 } from "framework7-vue";
import { popWindow } from "@/utils/bridge";
export default {
  name: "App",
  components: {},
  setup() {
    function back() {
      popWindow();
    }
    // Login screen data
    const username = ref("");
    const password = ref("");

    const alertLoginData = () => {
      f7.dialog.alert(
        "Username: " + username.value + "<br>Password: " + password.value,
        () => {
          f7.loginScreen.close();
        }
      );
    };

    return {
      back,
      username,
      password,
      alertLoginData,
    };
  },
};
</script>

<style lang="less">
@import "./index.less";
</style>