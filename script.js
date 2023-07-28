
let browserInfo = document.getElementById('browser-info')
let para = document.createElement('p')
para.innerText = `You are using ${navigator.appName} version ${navigator.appVersion}}`

browserInfo.appendChild(para)