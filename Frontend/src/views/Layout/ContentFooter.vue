<template>
  <footer class="footer px-4">
    <b-row align-v="center" class="justify-content-lg-between">
      <b-col lg="6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{year}} <a href="https://github.com/FoodyWorm/PMH" class="font-weight-bold ml-1" target="_blank">Jangenkim</a>
        </div>
      </b-col>
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
