'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: 'copy',
    title: 'Mimificator',
    contexts: ['selection']
  });

  const copy = function(str, mimeType='text/plain') {
    document.oncopy = function(event) {
      event.clipboardData.setData(mimeType, str);
      event.preventDefault();
    };
    document.execCommand("copy", false, null);
  }

  chrome.contextMenus.onClicked.addListener(({selectionText}) => {
      copy(selectionText.replace(/[aeou]/g, 'i').replace(/[AEOU]/g, 'I'))
  });
});
