var imageName = ["nya", "tome"]
var image = "0";
var caunt = 0;
var i = 0;

window.addEventListener("DOMContentLoaded", init)

function init() {
  canvas = document.getElementById("mainCanvas");
  ctx = canvas.getContext("2d");

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  asset();
}
function asset() {
  Asset.registerByJsonFile("assets.json", function() {
    //登録完了
    Asset.loadAll(function() {
      //      image();
      requestAnimationFrame(updata);
    });
  });
}
function slidesw() {
  ctx.drawImage(Asset.images[imageName[caunt]], 0, 0, canvas.width, canvas.height);
  if (300 == i) {
    up();
  }
}
function updata() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(updata);
  i++;
  slidesw();
}
function up() {
  caunt++;
  i = 0;
  if (caunt >= imageName.length) {
    caunt = 0;
  } else {}
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
