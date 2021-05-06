<template>
  <!-- 메인 페이지의 하단에 부가적인 설명들을 적는 컴포넌트 이다. -->
  <footer class="footer px-4">
    <b-row align-v="center" class="justify-content-lg-between">

      <!-- 2021 Jangenkim -->
      <b-col lg="6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{year}} <a href="https://github.com/FoodyWorm/PMH" class="font-weight-bold ml-1" target="_blank">Jangenkim</a>
        </div>
      </b-col>

      <!-- Creative Jangenkim, About us, Blog, License -->
      <b-col lg="6">
        <b-nav align="center" class="nav-footer justify-content-lg-end">
          <b-nav-item href="https://github.com/FoodyWorm/PMH"  target="_blank">
            Creative Jangenkim
          </b-nav-item>

          <b-nav-item href="https://www.creative-tim.com/presentation" target="_blank">
           About Us
          </b-nav-item>

          <b-nav-item href="https://develop-studying.tistory.com/" target="_blank">
            Blog
          </b-nav-item>

          <b-nav-item href="https://www.creative-tim.com/license" target="_blank">
            License
          </b-nav-item>

        </b-nav>
      </b-col>

    </b-row>
  </footer>

</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
