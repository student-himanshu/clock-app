// initialize modal
MicroModal.init();

// load saved timezone or default
let timezone = localStorage.getItem("timezone") || "Asia/Kolkata";

// update time every second
function updateTime() {
  let now = dayjs().format("HH:mm:ss");
  document.getElementById("time").textContent =
    `Time (${timezone}): ${now}`;
}

// run every second
setInterval(updateTime, 1000);

// open modal
document.getElementById("openModal").addEventListener("click", () => {
  MicroModal.show("modal-1");
});

// save timezone
document.getElementById("saveTZ").addEventListener("click", () => {
  timezone = document.getElementById("timezone").value;

  // save in browser
  localStorage.setItem("timezone", timezone);

  MicroModal.close("modal-1");
});