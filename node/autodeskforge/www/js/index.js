/////////////////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Jaime Rosales 2016 - Forge Developer Partner Services
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////////////////

// import defaultMember from '../extensions/Viewing.Extension.StateManager/index'
// Autodesk.Viewing.theExtensionManager.registerExtension('myStateManager', Viewing.Extension.StateManager);

/////////////////////////////////////////////////////////////////////////////////
//
// Use this call to get back an object json of your token
//使用这个回调去获得object json of token,然后格式化返回
/////////////////////////////////////////////////////////////////////////////////

var tokenurl = window.location.protocol + '//' + window.location.host + '/oauth/token';
function tokenAjax() {
      return $.ajax({
          url:tokenurl,
          dataType: 'json'
      });
}

/////////////////////////////////////////////////////////////////////////////////
//
// Initialize function to the Viewer inside of Async Promise
//在异步Promise中初始化viewer,初始化话Viewer的回调函数将在下面中定义
// 在Ajax返回，Promise成功的时候初始化Viewer
/////////////////////////////////////////////////////////////////////////////////
var viewerApp;
var viewables;
var viewables3D;
var viewables2D;
var indexViewable;

var options = {};
var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Zm9yZ2UtdGVzdC10ZXN0MS9saW5naHVpLnJ2dA';
var promise = tokenAjax();

var config = {
  extensions: ["Autodesk.InViewerSearch"],
  inViewerSearchConfig: {
      uiEnabled: true,
      clientId: "adsk.forge.default",
      sessionId: "F969EB70-242F-11E6-BDF4-0800200C9A66",
      loadedModelTab: {
          enabled: true, // If false, the tab is hidden.
          displayName: 'This View',
          pageSize: 50
      },
      relatedItemsTab: {
          enabled: true, // If false, the tab is hidden.
          displayName: 'This Item',
          pageSize: 20
      }
  }
};

promise.success(function (data) {
 options = {
      env: 'AutodeskProduction',
      accessToken: data.access_token
    };
    Autodesk.Viewing.Initializer(options, function onInitialized() {
      viewerApp = new Autodesk.Viewing.ViewingApplication('MyViewerDiv');
      viewerApp.registerViewer(viewerApp.k3D, Autodesk.Viewing.Private.GuiViewer3D);
      viewerApp.registerViewer(viewerApp.k3D, Autodesk.Viewing.Private.GuiViewer3D, config);
      viewerApp.loadDocument(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
    });
});

function onDocumentLoadSuccess(doc) {
  // We could still make use of Document.getSubItemsWithProperties()
  // However, when using a ViewingApplication, we have access to the **bubble** attribute,
  // which references the root node of a graph that wraps each object from the Manifest JSON.
  viewables = viewerApp.bubble.search({
      'type': 'geometry',
      // 'role':'3d'
  });
  viewables2d = viewerApp.bubble.search({
    'type': 'geometry',
    'role':'2d'
});
// viewables=viewables3D;

  if (viewables.length === 0) {
      console.error('Document contains no viewables.');
      return;
  }
  // Choose any of the avialble viewables
  indexViewable = 0;
  viewerApp.selectItem(viewables[indexViewable].data, onItemLoadSuccess, onItemLoadFail);
}

function onDocumentLoadFailure(viewerErrorCode) {
  console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
}

function onItemLoadSuccess(viewer, item) {
  console.log('onItemLoadSuccess()!');
  console.log(viewer);
  console.log(item);
  // Congratulations! The viewer is now ready to be used.
  console.log('Viewers are equal: ' + (viewer === viewerApp.getCurrentViewer()));
  console.log("当前显示第"+(indexViewable+1)+"张图");
}

function onItemLoadFail(errorCode) {
  console.error('onItemLoadFail() - errorCode:' + errorCode);
}

function loadNextModel() {
  // Next viewable index. Loop back to 0 when overflown.
  indexViewable = (indexViewable + 1) % viewables.length;
  viewerApp.selectItem(viewables[indexViewable].data, onItemLoadSuccess, onItemLoadFail);
}

function loadPreviousModel() {
  // Next viewable index. Loop back to 0 when overflown.
  indexViewable = (indexViewable - 1) % viewables.length;
  viewerApp.selectItem(viewables[indexViewable].data, onItemLoadSuccess, onItemLoadFail);
}