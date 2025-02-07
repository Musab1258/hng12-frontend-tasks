// Function to update the current UTC time
function updateUTCTime() {
    let now = new Date();
    document.getElementById('utcTime').innerText = now.toUTCString();
}

updateUTCTime();