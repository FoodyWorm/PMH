<template>
  <div class="content">
    <!-- FadeTransiton: 페이드 인/아웃 애니메이션 효과를 주는 태그 이다. -->
    <FadeTransition :duration="200" mode="out-in">
      <!-- your content here -->
      <router-view></router-view>
      
    </FadeTransition>
  </div>

</template>


<script>
// FadeTransiton 을 사용하기 위해, 모듈과 컴포넌트를 적용 //
import { FadeTransition } from 'vue2-transitions';

export default {
  components: {
    FadeTransition
  }
};
</script>


<style></style>
