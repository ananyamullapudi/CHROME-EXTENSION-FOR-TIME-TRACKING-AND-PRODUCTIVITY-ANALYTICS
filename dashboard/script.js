const API = "http://localhost:5000/api/time";

// Convert ms → minutes
function toMinutes(ms) {
    return Math.round(ms / 60000);
}

// Load Today's Data
async function loadToday() {
    const res = await fetch(`${API}/today`);
    const data = await res.json();

    let total = 0;
    let productive = 0;
    let unproductive = 0;

    const tbody = document.querySelector("#table tbody");
    tbody.innerHTML = "";

    data.forEach(item => {
        total += item.duration;

        if (item.category === "productive") productive += item.duration;
        if (item.category === "unproductive") unproductive += item.duration;

        tbody.innerHTML += `
            <tr>
                <td>${item.site}</td>
                <td>${toMinutes(item.duration)}</td>
                <td>${item.category}</td>
            </tr>
        `;
    });

    document.getElementById("totalTime").innerText = toMinutes(total) + " min";
    document.getElementById("productiveTime").innerText = toMinutes(productive) + " min";
    document.getElementById("unproductiveTime").innerText = toMinutes(unproductive) + " min";
}

// Weekly Chart
async function loadWeeklyChart() {
    const res = await fetch(`${API}/weekly`);
    const data = await res.json();

    const labels = Object.keys(data);
    const values = Object.values(data).map(toMinutes);

    const ctx = document.getElementById("weeklyChart").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Minutes Spent",
                data: values,
                backgroundColor: "rgba(255, 99, 132, 0.7)"
            }]
        }
    });
}

loadToday();
loadWeeklyChart();
