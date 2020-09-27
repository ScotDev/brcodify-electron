
const { app, Menu, BrowserWindow, globalShortcut } = require('electron');
// Module to control application life.
// const app = electron.app;
// Module to create native browser window.
// const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 750,
        height: 1000,
        fullscreenable: false,
        // resizable: false,
        title: "BRCODIFY",
        icon: `${__dirname}/public/favicon.ico`
    });


    // and load the index.html of the app.
    const startUrl = "http://localhost:3000/" || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });
    // const startUrl = 'https://thequarantinemixtape.com/';

    // mainWindow.loadFile('/../build/index.html')

    mainWindow.loadURL(startUrl);

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', () => {
    createWindow()
    globalShortcut.register("Ctrl+R", () => mainWindow.reload())
    globalShortcut.register("Ctrl+I", () => mainWindow.toggleDevTools())
}
);


const menu = [
    {
        label: "File",
        submenu: [
            {
                label: "Save...",
                accelerator: "Ctrl+S",
                // click: () => app.quit()
            },
            {
                label: "Print...",
                accelerator: "Ctrl+P",
                // click: () => app.quit()
            },
            { type: 'separator' },
            {
                label: "Exit",
                accelerator: "Ctrl+W",
                click: () => app.quit()
            }
        ]
    },
    {
        label: "Edit",
        submenu: [
            { role: 'undo' }
        ]
    },
    {
        label: "About",
        submenu: [
            { type: 'separator' },
            {
                label: "ScotDev",
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://www.scotdev.uk/')
                }
            }
        ]
    }

]

const mainMenu = Menu.buildFromTemplate(menu)
Menu.setApplicationMenu(mainMenu)


app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
    globalShortcut.unregisterAll()
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.