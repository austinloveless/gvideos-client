<template>
  <footer class="footer">
    <p class="footer-copy">
      &copy; 2018 - gVideos
    </p>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
  align-items: stretch;
  height: 30px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top: .5px solid #222;
}

.footer-copy {
  display: inline-flex;
  align-items: stretch;
}

p.footer-copy {
  font-size: 16px;
  align-self: center;
  margin-bottom: 0px;
  color: #222;
}

</style>
