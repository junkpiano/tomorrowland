import {app, BrowserWindow} from 'electron'
import * as path from 'path'

let win: BrowserWindow

function createWindow() {
    win = new BrowserWindow({
      darkTheme: true
    })

    win.loadFile(path.join(__dirname, '../index.html'))

    win.webContents.openDevTools()

    win.on('close', () => {
        win = null
    })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});
