var mode = "test"

window.addEventListener(DOMContentLoaded, init);

function init() {
  canvas = document.getElementById("maincanvas")
  ctx = canvas.getContext("2d");
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  requestAnimationFrame(updata)
}

function updata() {
  rendar();
  requestAnimationFrame(updata);
}
function rendar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  switch (mode) {
    case "test":
      test();
      break;
    default:

  }
}

function resizeCanvas() {
  var pageWidth = document.documentElement.clientWidth;
  var pageHeight = document.documentElement.clientHeight;
  var pageRatio = pageWidth / pageHeight;
  var canvasRatio = canvas.width / canvas.height;

  if (pageRatio < canvasRatio) {
    // ページの幅比率がCanvasの幅比率より小さい
    screenRatio = pageWidth / canvas.width;
    var canvasStyleHeight = canvas.height * screenRatio;
    canvas.style.width = pageWidth + "px";
    canvas.style.height = canvasStyleHeight + "px";
    canvas.style.marginLeft = "0";
    canvas.style.marginTop = "calc((100vh - " + canvasStyleHeight + "px) / 2)";
  } else {
    // ページの高さ比率がCanvasの高さ比率より小さい
    screenRatio = pageHeight / canvas.height;
    var canvasStyleWidth = canvas.width * screenRatio;
    canvas.style.width = canvasStyleWidth + "px";
    canvas.style.height = pageHeight + "px";
    canvas.style.marginLeft = "calc((100vw - " + canvasStyleWidth + "px) / 2)";
    canvas.style.marginTop = "0";
  }
}

function test() {}
