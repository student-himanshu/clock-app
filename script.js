// initialize modal
MicroModal.init();

// load saved timezone or default
let timezone = localStorage.getItem("timezone") || "Asia/Kolkata";

// update time every second
function updateTime() {
  let now = dayjs().format("HH:mm:ss");
  let date = dayjs().format("DD-MM-YYYY");

  document.getElementById("time").textContent =
    `Time (${timezone}): ${now} | Date: ${date}`;
}

// run every second
setInterval(updateTime, 1000);

// open modal
document.getElementById("openModal").addEventListener("click", () => {
  MicroModal.show("modal-1");
});


document.getElementById("reset").addEventListener("click", () => {
  localStorage.removeItem("timezone");
  timezone = "Asia/Kolkata";
});


// save timezone
document.getElementById("saveTZ").addEventListener("click", () => {
  timezone = document.getElementById("timezone").value;

  // save in browser
  localStorage.setItem("timezone", timezone);

  MicroModal.close("modal-1");
});