let canvasB = null
let ctxWorker = null
let img = null

// Waiting to receive the OffScreenCanvas
self.onmessage = event => {
  if (event.data === 'slowDown') {
    fibonacci(42)
  } else {
    canvasB = event.data.canvas
    ctxWorker = canvasB.getContext('2d')
    drawImage(event.data.src)
    startCounting()
  }
}

// Fibonacci function to add some delay to the thread
function fibonacci(num) {
  if (num <= 1) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

// Start the counter for Canvas B
let counter = 0
function startCounting() {
  setInterval(() => {
    redrawCanvasB()
    counter++
  }, 100)
}

// Redraw Canvas B text
function redrawCanvasB() {
  ctxWorker.clearRect(0, 0, canvasB.width, canvasB.height)
  ctxWorker.font = '24px Verdana'
  ctxWorker.textAlign = 'left'
  if (img) {
    ctxWorker.drawImage(img, 0, 0)
  }
  ctxWorker.fillText(counter, canvasB.width / 2, canvasB.height / 2)
}
function drawImage(src) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', src, false)
  xhr.responseType = 'blob'
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      createImageBitmap(xhr.response, {
        resizeWidth: canvasB.width,
        resizeHeight: canvasB.height
        // resizeQuality:
      }).then(simg => {
        img = simg
      })

      // var reader = new FileReader()
      // reader.readAsDataURL(xhr.response)
      // reader.onload = function (ev) {
      //   console.log(ev)
      //   // ctxWorker.drawImage(ev.target.files[0], 0, 0)
      //   ctxWorker.drawImage(ev.target.result, 0, 0)
      // }
      // ctxWorker.drawImage(URL.createObjectURL(xhr.response), 0, 0)
    }
  }
  xhr.send(null)
}
