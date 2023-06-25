const { BrowserWindow, app, ipcMain} = require('electron');
const isDev = require('electron-is-dev');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 644,
        resizable: false,
        frame: false,
        focusable: true,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    mainWindow.removeMenu();

    if (isDev) {
        mainWindow.loadURL('http://localhost:3000').then();
    } else {
        mainWindow.loadFile('build/index.html').then();
    }

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('closed', () => mainWindow = null);
}

ipcMain.handle('minimize-event', () => {
    mainWindow.minimize();
})

ipcMain.handle('close-event', () => {
    app.quit();
})

app.on('browser-window-focus', () => {
    mainWindow.webContents.send('focused');
})

app.on('browser-window-blur', () => {
    mainWindow.webContents.send('blurred');
})

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
