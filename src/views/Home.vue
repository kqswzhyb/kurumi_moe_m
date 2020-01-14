<template>
  <div class="home">
    <div class="poster">
      <van-sticky>
        <van-nav-bar
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
          class="nav-bar"
        >
          <div slot="right" class="avatar">
            <img
              src="@/assets/images/default_user.jpg"
              class="radius-50"
              width="24"
              alt=""
            />
          </div>
        </van-nav-bar>
      </van-sticky>
    </div>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>

    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
    <p>323232</p>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "home",
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>
<style lang="scss" scoped>
.avatar {
  line-height: 35px;
}
.poster {
  width: 100%;
  height: 40vw;
  background: url("../assets/images/poster.jpg") no-repeat center center;
  background-size: 100%;
}
.nav-bar {
  background: #0c0c0c;
  opacity: 0.8;
  color: #fff;
  border-bottom: 1px solid var(--red1);
}
</style>
