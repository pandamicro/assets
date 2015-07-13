var BrowserWindow = require('browser-window');
var Menu = require('./core/menu');

module.exports = {
    load: function () {
    },

    unload: function () {
    },

    'assets:open': function () {
        Editor.Panel.open('assets.panel');
    },

    'assets:popup-create-menu': function (event, x, y) {
        var template = Menu.getCreateTemplate();
        var editorMenu = new Editor.Menu(template, event.sender);
        // editorMenu.add( '', Editor.menus['create-asset'] );

        x = Math.floor(x);
        y = Math.floor(y);
        editorMenu.nativeMenu.popup(BrowserWindow.fromWebContents(event.sender), x, y);
        editorMenu.dispose();
    },

    'assets:popup-context-menu': function (event, x, y, uuid) {
        // // NOTE: without this, we will create new assets while watching ON
        // BrowserWindow.fromWebContents(event.sender).focus();

        var template = Menu.getContextTemplate(uuid);
        var editorMenu = new Editor.Menu(template, event.sender);
        // editorMenu.add( '', Editor.menus['create-asset'] );

        x = Math.floor(x);
        y = Math.floor(y);
        editorMenu.nativeMenu.popup(BrowserWindow.fromWebContents(event.sender), x, y);
        editorMenu.dispose();
    },
};
