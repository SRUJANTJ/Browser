const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  newTab: () => ipcRenderer.send('new-tab'),
  onCreateNewTab: (callback) => ipcRenderer.on('create-new-tab', callback)
});
