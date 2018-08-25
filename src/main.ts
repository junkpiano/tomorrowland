import {app, BrowserWindow} from 'electron'

let win

app.on('ready', () => {
  win = new BrowserWindow({
    darkTheme: true
  })

  app.setBadgeCount(1)
})
