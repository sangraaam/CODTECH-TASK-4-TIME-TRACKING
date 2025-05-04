let currentTab = "";
let startTime = Date.now();

chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, tab => {
    switchTab(tab.url);
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === "complete") {
    switchTab(tab.url);
  }
});

function switchTab(url) {
  try {
    const domain = new URL(url).hostname;
    const endTime = Date.now();
    const duration = endTime - startTime;

    if (currentTab) {
      saveTime(currentTab, duration);
    }

    currentTab = domain;
    startTime = Date.now();
  } catch (err) {
    console.error("Invalid URL", url);
  }
}

function saveTime(domain, duration) {
  fetch("http://localhost:5000/api/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ domain, duration })
  }).catch(err => console.error("API error:", err));
}
