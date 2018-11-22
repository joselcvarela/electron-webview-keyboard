const { ipcRenderer } = require('electron')

window._send = (channel) => {
  ipcRenderer.sendToHost(channel)
}

window.addEventListener('load', setTimeout(() => {
  var x = document.querySelectorAll('input[type=text], textarea')
  x.forEach(el => {
    el.addEventListener('focus', () => { _send('focus') })
    // el.addEventListener('blur', () => { _send('blur') })
  })
}, 1000))
