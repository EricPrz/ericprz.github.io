function calcVH() {
    var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    document.getElementsByClassName("hero").setAttribute("style", "height:" + vH + "px;");
  }
  calcVH();
  window.addEventListener('onorientationchange', calcVH, true);
  window.addEventListener('resize', calcVH, true);