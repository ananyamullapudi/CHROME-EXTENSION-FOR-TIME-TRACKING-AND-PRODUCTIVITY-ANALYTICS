let activeSite = null;
let startTime = null;

// When user switches to a new tab
chrome.tabs.onActivated.addListener(async (activeInfo) => {
    let tab = await chrome.tabs.get(activeInfo.tabId);
    startTracking(tab.url);
});

// When tab URL changes (user navigates to a different page)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        startTracking(tab.url);
    }
});

// Function to start tracking a website
function startTracking(url) {
    if (!url || !url.startsWith("http")) return;

    // Stop previous site timer
    if (activeSite) {
        let duration = Date.now() - startTime;
        saveTime(activeSite, duration);
    }

    // Start new site timer
    try {
        activeSite = new URL(url).hostname;
    } catch (err) {
        return;
    }

    startTime = Date.now();
}

// Save time to local storage & backend
function saveTime(site, duration) {
    if (duration < 1000) return; // Ignore <1 sec usage

    // Store locally
    chrome.storage.local.get(["timeData"], (data) => {
        let timeData = data.timeData || {};
        timeData[site] = (timeData[site] || 0) + duration;
        chrome.storage.local.set({ timeData });
    });

    // Send to backend
    fetch("http://localhost:5000/api/time/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            site,
            duration
        })
    }).catch((err) => console.log("Backend offline:", err));
}

// When browser closes or extension shuts down
chrome.runtime.onSuspend.addListener(() => {
    if (activeSite) {
        let duration = Date.now() - startTime;
        saveTime(activeSite, duration);
    }
});
