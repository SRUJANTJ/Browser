let tabCount = 1;

function createNewTab() {
  const tabBar = document.getElementById('tab-bar');
  const newTab = document.createElement('div');
  newTab.className = 'tab';
  newTab.innerText = `Tab ${tabCount}`;
  newTab.dataset.index = tabCount;
  newTab.onclick = () => switchTab(newTab.dataset.index);
  tabBar.appendChild(newTab);

  const webview = document.createElement('webview');
  webview.id = `webview-${tabCount}`;
  webview.src = 'https://www.google.com';
  webview.style.display = 'none';
  document.getElementById('content').appendChild(webview);

  switchTab(tabCount);
  tabCount++;
}

function switchTab(index) {
  document.querySelectorAll('webview').forEach(wv => wv.style.display = 'none');
  document.getElementById(`webview-${index}`).style.display = 'block';
}

window.electronAPI.onCreateNewTab(() => {
  createNewTab();
});
function createNewTab() {
    const tabBar = document.getElementById('tab-bar');
    const newTab = document.createElement('div');
    newTab.className = 'tab';
    newTab.innerHTML = `Tab ${tabCount} <span onclick="closeTab(${tabCount})">x</span>`;
    newTab.dataset.index = tabCount;
    newTab.onclick = (e) => {
      if (e.target.tagName !== 'SPAN') switchTab(newTab.dataset.index);
    };
    tabBar.appendChild(newTab);
  
    const webview = document.createElement('webview');
    webview.id = `webview-${tabCount}`;
    webview.src = 'https://www.google.com';
    webview.style.display = 'none';
    document.getElementById('content').appendChild(webview);
  
    switchTab(tabCount);
    tabCount++;
  }
  
  function closeTab(index) {
    const tab = document.querySelector(`.tab[data-index="${index}"]`);
    tab.remove();
    document.getElementById(`webview-${index}`).remove();
  
    if (index === tabCount - 1 && index > 1) {
      switchTab(index - 1);
    }
  }
  